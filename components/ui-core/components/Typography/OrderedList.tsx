import styled from '@emotion/styled'
import * as React from 'react'
import Text from './Text'

export interface OrderedListProps {
  className?: string
  style?: React.CSSProperties
}

const OLRoot = styled(Text)`
  display: block;
  list-style-type: decimal;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const UnorderedList: React.FC<OrderedListProps> = ({ children, ...rest }) => (
  <OLRoot as="ol" m="sm" ml="md" p={0} {...rest}>
    {children}
  </OLRoot>
)

UnorderedList.displayName = 'OrderedList'

export default UnorderedList
