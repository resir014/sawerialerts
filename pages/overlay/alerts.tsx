/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-danger */
import * as React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import base64url from 'base64-url'

import { OverlayRoot } from 'components/layout'
import { OverlayConfig } from 'utils/types'

const SaweriaWidgetBox = dynamic(() => import('components/alerts/SaweriaWidgetBox'), {
  ssr: false
})

interface AlertsOverlayPageProps {
  config?: OverlayConfig
}

const AlertsOverlayPage: NextPage<AlertsOverlayPageProps> = ({ config }) => {
  if (config) {
    return (
      <OverlayRoot>
        <Head>
          <title>Overlay</title>
          <style dangerouslySetInnerHTML={{ __html: config.css }} />
        </Head>
        <SaweriaWidgetBox config={config} />
      </OverlayRoot>
    )
  }

  return null
}

AlertsOverlayPage.getInitialProps = async ctx => {
  const { config } = ctx.query
  let actualConfig: string | undefined

  if (Array.isArray(config)) {
    // eslint-disable-next-line prefer-destructuring
    actualConfig = config[0]
  } else {
    actualConfig = config
  }

  if (actualConfig) {
    const decoded: OverlayConfig = JSON.parse(base64url.decode(actualConfig))

    return { config: decoded }
  }

  return { config: undefined }
}

export default AlertsOverlayPage
