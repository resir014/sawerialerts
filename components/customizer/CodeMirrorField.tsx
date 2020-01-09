import * as React from 'react'
import { useField } from 'formik'
import { Text, TextInputProps, Box, Stack } from 'components/ui-core'
import { UnControlled as CodeMirror } from 'react-codemirror2'

import codemirror from 'codemirror/lib/codemirror.css'
import materialTheme from 'codemirror/theme/seti.css'

export interface CodeMirrorFieldProps extends TextInputProps {
  mode: 'html' | 'css'
  label: string
}

const CodeMirrorField: React.FC<CodeMirrorFieldProps> = ({ label, name = '', mode, autoComplete, disabled, placeholder, ...props }) => {
  const [field, meta, helpers] = useField({ name, autoComplete, disabled, placeholder })

  return (
    <Box {...props}>
      <Stack as="label" htmlFor={name} spacing="xs">
        <Text display="block" variant={200}>
          {label}
        </Text>
        <CodeMirror
          value={field.value}
          options={{
            mode,
            theme: 'seti',
            lineNumbers: true,
            tabSize: 2
          }}
          onChange={(_editor, _data, value) => {
            helpers.setValue(value)
          }}
        />
      </Stack>
      {meta.touched && meta.error ? (
        <Text display="block" color="error2">
          {meta.error}
        </Text>
      ) : null}
      <style jsx global>
        {codemirror}
      </style>
      <style jsx global>
        {materialTheme}
      </style>
    </Box>
  )
}

export default CodeMirrorField
