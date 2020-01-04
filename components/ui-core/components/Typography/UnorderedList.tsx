import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import { themeProps } from 'components/ui-core/Theme'
import * as React from 'react'
import { Stack } from '../Stack'

export interface UnorderedListProps {
  className?: string
  style?: React.CSSProperties
}

const ULRoot = styled(Stack)`
  display: block;
  list-style-type: none;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  > li::before {
    content: '–';
    display: inline-block;
    color: ${themeGet('colors.accents04', themeProps.colors.accents04)};
    position: absolute;
    margin-left: -15px;
  }
`

const UnorderedList: React.FC<UnorderedListProps> = ({ children, ...rest }) => (
  <ULRoot as="ul" spacing="sm" m="sm" ml="md" p={0} {...rest}>
    {children}
  </ULRoot>
)

UnorderedList.displayName = 'UnorderedList'

export default UnorderedList
