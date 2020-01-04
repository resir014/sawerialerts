import * as React from 'react'
import Text from './Text'

export interface ListItemProps {
  className?: string
  style?: React.CSSProperties
}

const ListItem: React.FC<ListItemProps> = ({ children, ...rest }) => (
  <Text as="li" {...rest}>
    {children}
  </Text>
)

ListItem.displayName = 'ListItem'

export default ListItem
