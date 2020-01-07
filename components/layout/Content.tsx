import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import * as React from 'react'
import { themeProps } from '../ui-core'

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
`

const Inner = styled('div')`
  width: 100%;
  max-width: ${themeGet('widths.lg', themeProps.widths.lg)}px;
  margin: 0 auto;
`

const Content: React.FC = ({ children }) => {
  return (
    <Main>
      <Inner>{children}</Inner>
    </Main>
  )
}

export default Content
