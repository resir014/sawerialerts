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

export interface TextProps extends LayoutProps, SpaceProps, ColorProps, SystemTypographyProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  color?: string
  variant?: TextScale
}

const Text = styled('span', { shouldForwardProp })<TextProps>(variant({ scale: 'textScale' }), layout, space, color, typography)

Text.defaultProps = {
  variant: 400
}

Text.displayName = 'Text'

export default Text
