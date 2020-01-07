import * as React from 'react'
import { NextPage } from 'next'

import { Content, Page } from 'components/layout'
import { Heading, Paragraph, Stack } from 'components/ui-core'

const H1 = Heading.withComponent('h1')

const AboutPage: NextPage = () => (
  <Page title="About">
    <Content>
      <Stack spacing="md">
        <H1 variant={900}>About sawerialerts.</H1>
        <Paragraph>
          <strong>sawerialerts</strong> is an advanced alerts customizer for{' '}
          <a href="https://saweria.co" target="_blank" rel="noopener noreferrer">
            Saweria
          </a>
          . It was built by{' '}
          <a href="https://twitter.com/resir014" target="_blank" rel="noopener noreferrer">
            @resir014
          </a>
          . (Don&apos;t forget to{' '}
          <a href="https://resir014.xyz/support" target="_blank" rel="noopener noreferrer">
            tip him
          </a>
          !)
        </Paragraph>
      </Stack>
    </Content>
  </Page>
)

export default AboutPage
