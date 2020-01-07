import * as React from 'react'
import { NextPage } from 'next'
import { Formik, Form, FormikHelpers } from 'formik'
import base64url from 'base64-url'
import { toClipboard } from 'copee'

import { Content, Page } from 'components/layout'
import { Heading, Paragraph, Button, Box, Stack, Text, UnorderedList, ListItem, TextInput } from 'components/ui-core'
import { TextField, CodeMirrorField } from 'components/customizer'
import { defaultHtml, defaultStyles } from 'utils/defaults'

interface FormValues {
  streamKey: string
  html: string
  css: string
}

const initialValues: FormValues = {
  streamKey: '',
  html: defaultHtml,
  css: defaultStyles
}

const IndexPage: NextPage = () => {
  const [finalUrl, setFinalUrl] = React.useState<string | undefined>(undefined)
  const [copySuccess, setCopySuccess] = React.useState(false)

  const handleSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    helpers.setSubmitting(true)

    try {
      const url = base64url.encode(JSON.stringify(values))
      setFinalUrl(`https://sawerialerts.now.sh/overlay/alerts?config=${url}`)
    } catch (err) {
      console.error(err)
    } finally {
      helpers.setSubmitting(false)
    }
  }

  const handleCopy = () => {
    if (finalUrl) {
      const success = toClipboard(finalUrl)

      if (success) {
        setCopySuccess(true)

        setTimeout(() => {
          setCopySuccess(false)
        }, 3000)
      }
    }
  }

  return (
    <Page title="Alert Customizer | sawerialerts">
      <Content>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => {
            return (
              <Form>
                <Heading as="h1" variant={900}>
                  Alert Customizer.
                </Heading>

                <Box mt="xxl" borderTopWidth="1px" borderTopStyle="solid" borderTopColor="accents03" pt="xl">
                  <Stack spacing="lg">
                    <Heading>Step 1: Your Details</Heading>
                    <TextField fullWidth autoComplete="off" name="streamKey" label="Stream Key" placeholder="Enter your stream key here" />
                    <Paragraph>
                      The stream key is located in your default Saweria donation alert URL, right after the{' '}
                      <Text as="code">?streamKey=</Text> section. Copy and paste that into the text box below.
                    </Paragraph>
                    <Box as="pre" display="block" overflowX="auto" p="sm" backgroundColor="accents01" width="100%">
                      <Text display="inline" as="code">
                        https://saweria.co/donation-alert?streamKey=<Text color="error02">f0744...7a36a9</Text>&backgroundColor=...
                      </Text>
                    </Box>
                  </Stack>
                </Box>
                <Box mt="xxl" borderTopWidth="1px" borderTopStyle="solid" borderTopColor="accents03" pt="xl">
                  <Stack spacing="lg">
                    <Heading>Step 2: Design However You Like!</Heading>
                    <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(calc(1200px / 4 - 24px), 1fr))" gridGap="md">
                      <Stack spacing="md">
                        <Box>
                          <CodeMirrorField mode="css" name="css" label="CSS editor" />
                        </Box>
                        <Box>
                          <CodeMirrorField mode="html" name="html" label="HTML editor" />
                        </Box>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
                <Box mt="xxl" borderTopWidth="1px" borderTopStyle="solid" borderTopColor="accents03" pt="xl">
                  <Stack spacing="lg">
                    <Heading>Step 3: Get Your URL</Heading>
                    <Box>
                      <Button block variant="primary" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Saving...' : 'Save'}
                      </Button>
                      {finalUrl && (
                        <Box display="flex" flexDirection="row" mt="md">
                          <TextInput fullWidth disabled value={finalUrl} mr="md" />
                          <Button type="button" onClick={handleCopy} disabled={copySuccess}>
                            {copySuccess ? 'Copied!' : 'Copy'}
                          </Button>
                        </Box>
                      )}
                    </Box>
                  </Stack>
                </Box>
                <Box mt="xxl" borderTopWidth="1px" borderTopStyle="solid" borderTopColor="accents03" pt="xl">
                  <Heading mb="lg">Help</Heading>
                  <Stack spacing="md">
                    <Heading as="h4" variant={600}>
                      HTML/CSS Editor
                    </Heading>
                    <Paragraph>
                      Use the HTML and CSS editor below to modify your alert&apos;s styling. We included a sample layout for you to get
                      started. Use variables with the format of <Text as="code">{`{variableName}`}</Text> to include alert data in the
                      content.
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
                  </Stack>
                </Box>
              </Form>
            )
          }}
        </Formik>
      </Content>
    </Page>
  )
}

export default IndexPage
