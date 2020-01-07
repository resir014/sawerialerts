import * as React from 'react'
import styled from '@emotion/styled'
import {
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  grid,
  GridProps,
  space,
  SpaceProps,
  background,
  BackgroundProps,
  color,
  ColorProps,
  border,
  BorderProps
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

export interface BoxProps
  extends LayoutProps,
    FlexboxProps,
    PositionProps,
    GridProps,
    SpaceProps,
    BackgroundProps,
    ColorProps,
    BorderProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  className?: string
  style?: React.CSSProperties
}

/**
 * Box is a view with all styled-system hooks added to it. You can use it as a
 * base component for all display elements.
 */
const Box = styled<'div', BoxProps>('div', { shouldForwardProp })`
  ${layout}
  ${flexbox}
  ${position}
  ${grid}
  ${space}
  ${background}
  ${color}
  ${border}
`

Box.displayName = 'Box'

export default Box
