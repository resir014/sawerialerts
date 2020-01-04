import * as React from 'react'
import { NextPage } from 'next'
import convert from 'htmr'

import { Content, Page } from 'components/layout'
import { Heading, Paragraph, Button, Box, Stack, Text, UnorderedList, ListItem } from 'components/ui-core'

//#region wildcard values to JSX expressions

// Example for converting wildcard values (e.g. `{}`) to JSX expressions in `htmr`
// (Thanks to @pveyes for this example! https://gist.github.com/pveyes/0b340119495d48099431869e6ecc1ffa)

// JSX expression
const TEMPLATE_REGEX = /{(\w+)}/

const valueMap: { [key: string]: any } = {
  test: 'hello'
}

const html = '<p>{test}</p>'

const result = convert(html, {
  transform: {
    p: Paragraph,
    _: (node, props, children) => {
      if (typeof props === 'undefined' && typeof node === 'string') {
        // text node
        if (TEMPLATE_REGEX.test(node)) {
          const key = node.replace(TEMPLATE_REGEX, '$1')
          return valueMap[key]
        }

        return node
      }

      // fallback
      return React.createElement(node, props, children)
    }
  }
})

//#endregion

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
        {result}
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
