import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import { themeProps } from 'components/ui-core'
import * as React from 'react'

const Main = styled('main')`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(auto, ${themeGet('breakpoints.4', themeProps.breakpoints[4])}) 1fr 1fr;
  flex: 1;
  padding: 1.5rem;
`

const Inner = styled('div')`
  grid-column: 3/4;
`

const Content: React.FC = ({ children }) => {
  return (
    <Main>
      <Inner>{children}</Inner>
    </Main>
  )
}

export default Content
