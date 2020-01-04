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
import { ParagraphScale } from '../../Theme'

export interface ParagraphProps extends LayoutProps, SpaceProps, ColorProps, SystemTypographyProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  color?: string
  variant?: ParagraphScale
}

const Paragraph = styled('p', { shouldForwardProp })<ParagraphProps>(variant({ scale: 'paragraphScale' }), layout, space, color, typography)

Paragraph.defaultProps = {
  variant: 400
}

Paragraph.displayName = 'Paragraph'

export default Paragraph
