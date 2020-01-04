import * as React from 'react'
import Head from 'next/head'
import LayoutRoot from './LayoutRoot'
import Navigation from './Navigation'

interface PageProps {
  title?: string
}

const Page: React.SFC<PageProps> = ({ children, title }) => (
  <LayoutRoot>
    <Head>
      <title>{title || 'sawerialerts'}</title>
    </Head>
    <Navigation />
    {children}
  </LayoutRoot>
)

export default Page
