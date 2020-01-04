import * as React from 'react'
import { NextPage } from 'next'

import { Content, Page } from 'components/layout'
import { Heading, Paragraph, Button, Box, Stack } from 'components/ui-core'

const H1 = Heading.withComponent('h1')
const H2 = Heading.withComponent('h2')

const IndexPage: NextPage = () => (
  <Page title="Alert Customizer | sawerialerts">
    <Content>
      <Stack spacing="md">
        <H1 variant={900}>Alert Customizer.</H1>
        <Paragraph variant={500}>Use HTML and CSS to modify your stream overlay.</Paragraph>
        <H2>Saweria Details</H2>
        <Paragraph>Stream Key</Paragraph>
        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(calc(1200px / 4 - 24px), 1fr))" gridGap="md">
          <Button>button</Button>
          <Button variant="primary">another button</Button>
          <Button variant="success">yet another button</Button>
          <Button variant="destructive">yes, another button</Button>
        </Box>
      </Stack>
    </Content>
  </Page>
)

export default IndexPage
