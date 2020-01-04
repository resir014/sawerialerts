import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { colors, space, fonts, breakpoints, textScale, paragraphScale, mediaQueries } from './utils/variables'

export const themeProps = {
  colors,
  space,
  fonts,
  textScale,
  paragraphScale,
  mediaQueries,
  breakpoints
}

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={themeProps}>{children}</ThemeProvider>
}

export type Color = keyof typeof themeProps['colors']
export type Space = keyof typeof themeProps['space']
export type TextScale = keyof typeof themeProps['textScale']
export type ParagraphScale = keyof typeof themeProps['paragraphScale']
