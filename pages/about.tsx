import * as React from 'react'
import { NextPage } from 'next'

import { Content, Page } from 'components/layout'
import { Heading, Paragraph, Stack } from 'components/ui-core'

const H1 = Heading.withComponent('h1')

const AboutPage: NextPage = () => (
  <Page title="About | sawerialerts">
    <Content>
      <Stack spacing="md">
        <H1 variant={900}>About sawerialerts.</H1>
        <Paragraph>
          <strong>sawerialerts</strong> is an advanced alerts customizer for Saweria. It was built by{' '}
          <a href="https://twitter.com/resir014">@resir014</a>.
        </Paragraph>
      </Stack>
    </Content>
  </Page>
)

export default AboutPage
