import styled from '@emotion/styled'
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps as SystemTypographyProps,
  variant
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { TextScale } from '../../Theme'

export interface HeadingProps extends LayoutProps, SpaceProps, ColorProps, SystemTypographyProps {
  variant?: TextScale
}

const Heading = styled<'h2', HeadingProps>('h2', { shouldForwardProp })(variant({ scale: 'textScale' }), layout, space, color, typography)

Heading.defaultProps = {
  variant: 800
}

Heading.displayName = 'Heading'

export default Heading
