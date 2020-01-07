import * as React from 'react'
import { useField } from 'formik'
import { TextInput, Text, TextInputProps } from 'components/ui-core'

export interface StreamKeyTextFieldProps extends TextInputProps {
  label?: string
}

const TextField: React.FC<StreamKeyTextFieldProps> = ({ label, name = '', ...props }) => {
  const [field, meta] = useField({ name, ...props })

  return (
    <>
      <label htmlFor={name}>
        {label && (
          <Text display="block" variant={200} mb="xs">
            {label}
          </Text>
        )}
        <TextInput name={name} {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <Text display="block" color="error2">
          {meta.error}
        </Text>
      ) : null}
    </>
  )
}

export default TextField
