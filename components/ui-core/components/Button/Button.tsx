import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import { transparentize } from 'polished'
import { variant } from 'styled-system'
import { Box } from '../Box'

export type ButtonVariants = 'default' | 'primary' | 'success' | 'destructive'

export interface ButtonProps {
  block?: boolean
  variant?: ButtonVariants
}

const buttonStyles = css`
  margin: 0;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background: none;
  text-decoration: none;
  line-height: 1;
  letter-spacing: 0.2px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  &:hover,
  &:focus {
    text-decoration: none;
  }
  &:focus {
    outline: 0px;
  }
`

const globals = (props: ButtonProps) => ({
  display: props.block ? 'block' : 'inline-block',
  px: 'md',
  height: 36,
  minWidth: 200,
  fontSize: themeGet('textScale.200.fontSize', '14px')(props),
  lineHeight: themeGet('textScale.400.lineHeight', '20px')(props)
})

const BoxAsButton = Box.withComponent('button')

const Button = styled(BoxAsButton)<ButtonProps>`
  ${buttonStyles}
  ${globals}
  ${props =>
    variant({
      variants: {
        default: {
          borderColor: 'accents02',
          color: 'foreground',
          '&:hover': {
            backgroundColor: transparentize(0.8, themeGet('colors.accents02')(props))
          }
        },
        primary: {
          borderColor: 'primary02',
          backgroundColor: transparentize(0.9, themeGet('colors.primary02')(props)),
          color: 'foreground',
          '&:hover': {
            backgroundColor: transparentize(0.8, themeGet('colors.primary02')(props))
          }
        },
        success: {
          borderColor: 'success02',
          backgroundColor: transparentize(0.9, themeGet('colors.success02')(props)),
          color: 'foreground',
          '&:hover': {
            backgroundColor: transparentize(0.8, themeGet('colors.success02')(props))
          }
        },
        destructive: {
          borderColor: 'error02',
          backgroundColor: transparentize(0.9, themeGet('colors.error02')(props)),
          color: 'foreground',
          '&:hover': {
            backgroundColor: transparentize(0.8, themeGet('colors.error02')(props))
          }
        }
      }
    })(props)}
`

Button.defaultProps = {
  variant: 'default'
}

Button.displayName = 'Button'

export default Button
