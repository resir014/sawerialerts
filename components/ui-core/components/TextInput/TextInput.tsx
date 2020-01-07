import * as React from 'react'
import styled from '@emotion/styled'
import { space, SpaceProps, layout, LayoutProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import { themeProps } from 'components/ui-core/Theme'

export interface TextInputProps
  extends Omit<LayoutProps, 'size'>,
    SpaceProps,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'type' | 'value' | 'placeholder' | 'disabled' | 'onChange'> {
  className?: string
  style?: React.CSSProperties
  fullWidth?: boolean
  width?: string | number
  height?: string | number
}

const Root = styled('input')<TextInputProps>`
  ${layout}
  ${space}
  background: none;
  height: 36px;
  font-size: ${themeGet('textScale.200.fontSize', themeProps.textScale[200].fontSize)};
  line-height: 1;
  border: 1px solid ${themeGet('colors.accents03', themeProps.colors.accents03)};
  border-radius: 4px;
  color: ${themeGet('colors.foreground', themeProps.colors.foreground)};
  overflow-x: auto;

  &::placeholder {
    color: ${themeGet('colors.accents03', themeProps.colors.accents03)};
  }

  &:focus {
    outline: none;
    border-color: ${themeGet('colors.foreground', themeProps.colors.foreground)};
  }
`

const TextInput: React.FC<TextInputProps> = ({ className, style, type = 'text', fullWidth, ...rest }) => {
  return (
    <Root
      className={className}
      style={style}
      display={fullWidth ? 'block' : 'inline-block'}
      width={fullWidth ? '100%' : undefined}
      px="sm"
      py="xs"
      type={type}
      {...rest}
    />
  )
}

export default TextInput
