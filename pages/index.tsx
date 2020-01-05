import * as React from 'react'
import { NextPage } from 'next'

import { Content, Page } from 'components/layout'
import { Heading, Paragraph, Button, Box, Stack, Text, UnorderedList, ListItem } from 'components/ui-core'

const IndexPage: NextPage = () => (
  <Page title="Alert Customizer | sawerialerts">
    <Content>
      <Stack spacing="md">
        <Heading as="h1" variant={900}>
          Alert Customizer.
        </Heading>
        <Paragraph variant={500}>Use HTML and CSS to modify your stream overlay.</Paragraph>
        <Heading>Saweria Details</Heading>
        <Heading as="h3" variant={700}>
          Stream Key
        </Heading>
        <Paragraph>
          The stream key is located in your default Saweria donation alert URL, right after the <Text as="code">?streamKey=</Text> section.
          Copy and paste that into the text box below.
        </Paragraph>
        <Paragraph>
          <Text as="code">
            https://saweria.co/donation-alert?streamKey=<Text color="error02">f0744...7a36a9</Text>&backgroundColor=...
          </Text>
        </Paragraph>
        <input style={{ marginBottom: 16 }} type="text" placeholder="Enter your stream key here" />
        <Heading>Design However You Like!</Heading>
        <Paragraph>
          Use the HTML and CSS editor below to modify your alert&apos;s styling. We included a sample layout for you to get started. Use
          variables with the format of <Text as="code">{`{variableName}`}</Text> to include alert data in the content.
        </Paragraph>
        <Paragraph>Available variables you can use are as follows:</Paragraph>
        <UnorderedList>
          <ListItem>
            <Text as="code">{`{donatee}`}</Text> - name of the donator.
          </ListItem>
          <ListItem>
            <Text as="code">{`{amount}`}</Text> - donation amount.
          </ListItem>
          <ListItem>
            <Text as="code">{`{message}`}</Text> - donation message.
          </ListItem>
        </UnorderedList>
        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(calc(1200px / 4 - 24px), 1fr))" gridGap="md">
          <Box>
            <Heading as="h3" variant={700}>
              CSS editor
            </Heading>
          </Box>
          <Box>
            <Heading as="h3" variant={700}>
              HTML editor
            </Heading>
          </Box>
        </Box>
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
