import * as React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { Formik, Form, FormikHelpers } from 'formik'
import base64url from 'base64-url'
import { toClipboard } from 'copee'
import { useLocalStorage } from 'react-use'

import { Content, Page } from 'components/layout'
import { Heading, Paragraph, Button, Box, Stack, Text, UnorderedList, ListItem, TextInput } from 'components/ui-core'
import { TextField, CodeMirrorField } from 'components/customizer'
import { defaultHtml, defaultStyles } from 'utils/defaults'
import { OverlayConfig } from 'utils/types'

type FormValues = OverlayConfig

const initialValues: FormValues = {
  streamKey: '',
  alertTemplate: '{donatee} donated {amount}!',
  html: defaultHtml,
  css: defaultStyles
}

interface IndexPageProps {
  serverUrl?: string
}

const IndexPage: NextPage<IndexPageProps> = ({ serverUrl }) => {
  const router = useRouter()
  const [storage, setStorage] = useLocalStorage('config', initialValues)
  const [finalUrl, setFinalUrl] = React.useState<string | undefined>(undefined)
  const [copySuccess, setCopySuccess] = React.useState(false)

  const handleSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    helpers.setSubmitting(true)

    try {
      const encodedurl = base64url.encode(JSON.stringify(values))
      setFinalUrl(`${serverUrl}/overlay/alerts?config=${encodedurl}`)
    } catch (err) {
      console.error(err)
    } finally {
      setStorage(values)
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

  const handleReset = () => {
    setStorage(initialValues)
    router.reload()
  }

  const validationSchema = yup.object().shape({
    streamKey: yup.string().required('Please enter a stream key.'),
    alertTemplate: yup.string().required('Please enter a template.'),
    image: yup.string().url('Not a valid image URL.'),
    html: yup.string(),
    css: yup.string()
  })

  return (
    <Page title="Home">
      <Content>
        <Formik initialValues={storage || initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting, isValid }) => {
            return (
              <Form>
                <Heading as="h1" variant={900}>
                  Alert Customizer.
                </Heading>

                <Box mt="xxl" borderTopWidth="1px" borderTopStyle="solid" borderTopColor="accents03" pt="xl">
                  <Stack spacing="lg">
                    <Heading>Step 1: Your Details</Heading>
                    <Stack spacing="md">
                      <TextField
                        fullWidth
                        autoComplete="off"
                        name="streamKey"
                        label="Stream Key"
                        placeholder="Enter your stream key here"
                      />
                      <Paragraph>
                        The stream key is located in your default Saweria donation alert URL, right after the{' '}
                        <Text as="code">?streamKey=</Text> section. Copy and paste that into the text box above.
                      </Paragraph>
                      <Box as="pre" display="block" overflowX="auto" p="sm" backgroundColor="accents01" width="100%">
                        <Text display="inline" as="code">
                          https://saweria.co/donation-alert?streamKey=<Text color="error02">f0744...7a36a9</Text>&backgroundColor=...
                        </Text>
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
                <Box mt="xxl" borderTopWidth="1px" borderTopStyle="solid" borderTopColor="accents03" pt="xl">
                  <Stack spacing="lg">
                    <Stack spacing="md">
                      <Heading>Step 2: Design However You Like!</Heading>
                      <Paragraph>
                        Use the HTML and CSS editor below to modify your alert&apos;s styling. We included a sample layout for you to get
                        started. Use variables with the format of <Text as="code">{`{variableName}`}</Text> to include alert data in the
                        content.
                      </Paragraph>
                      <Paragraph>Available variables you can use inside your custom HTML code are as follows:</Paragraph>
                      <UnorderedList>
                        <ListItem>
                          <Text as="code">{`{img}`}</Text> - Where the custom alert image below will be injected.
                        </ListItem>
                        <ListItem>
                          <Text as="code">{`{alertTemplate}`}</Text> - Where the alert template below will be injected.
                        </ListItem>
                        <ListItem>
                          <Text as="code">{`{message}`}</Text> - The donation message.
                        </ListItem>
                      </UnorderedList>
                    </Stack>
                    <TextField
                      fullWidth
                      autoComplete="off"
                      name="alertTemplate"
                      label="Alert Template"
                      placeholder={`e.g. "{donatee} donated {amount}!`}
                    />
                    <TextField
                      fullWidth
                      autoComplete="off"
                      name="image"
                      label="Image Source"
                      placeholder="e.g. https://i.imgur.com/6YToyEF.png"
                    />
                    <Stack spacing="md">
                      <Paragraph>You can use these variables in your alert template.</Paragraph>
                      <UnorderedList>
                        <ListItem>
                          <Text as="code">{`{donatee}`}</Text> - name of the donator.
                        </ListItem>
                        <ListItem>
                          <Text as="code">{`{amount}`}</Text> - donation amount.
                        </ListItem>
                      </UnorderedList>
                    </Stack>
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
                      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(calc(1200px / 4 - 24px), 1fr))" gridGap="md">
                        <Button block variant="primary" type="submit" disabled={!isValid || isSubmitting}>
                          {isSubmitting ? 'Saving...' : 'Save'}
                        </Button>
                        <Button block variant="destructive" type="button" onClick={handleReset}>
                          Reset to Defaults
                        </Button>
                      </Box>
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
              </Form>
            )
          }}
        </Formik>
      </Content>
    </Page>
  )
}

IndexPage.getInitialProps = async ctx => {
  const { req } = ctx
  const host = req ? req.headers.host : window.location.hostname
  let protocol = 'https:'

  if (host && host.indexOf('localhost') > -1) {
    protocol = 'http:'
  }

  if (req) {
    return { serverUrl: `${protocol}//${host}` }
  }

  return {}
}

export default IndexPage
