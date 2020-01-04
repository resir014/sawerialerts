import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import * as React from 'react'
import { themeProps, Space } from '../../Theme'
import { Stack } from '../Stack'

export interface BlockquoteProps {
  className?: string
  style?: React.CSSProperties
  spacing?: Space
}

const Root = styled(Stack)`
  color: ${themeGet('colors.accents04', themeProps.colors.accents04)};
  border-left: 1px solid ${themeGet('colors.white', themeProps.colors.white)};
`

const ListItem: React.FC<BlockquoteProps> = ({ children, spacing = 'xs', ...rest }) => (
  <Root as="blockquote" pl="sm" pr="md" mx={0} my="md" spacing={spacing} {...rest}>
    {children}
  </Root>
)

ListItem.displayName = 'ListItem'

export default ListItem
