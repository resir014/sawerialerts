import * as React from 'react'
import { useField } from 'formik'
import { TextInput, Text, TextInputProps, Stack, Box } from 'components/ui-core'

export interface StreamKeyTextFieldProps extends TextInputProps {
  label?: string
}

const TextField: React.FC<StreamKeyTextFieldProps> = ({ label, name = '', fullWidth, ...props }) => {
  const [field, meta] = useField({ name, ...props })

  return (
    <Box {...props}>
      <Stack as="label" htmlFor={name} spacing="xs">
        {label && (
          <Text display="block" variant={200} mb="xs">
            {label}
          </Text>
        )}
        <TextInput name={name} {...field} fullWidth={fullWidth} />
        {meta.touched && meta.error ? (
          <Text display="block" variant={200} color="error02">
            {meta.error}
          </Text>
        ) : null}
      </Stack>
    </Box>
  )
}

export default TextField
