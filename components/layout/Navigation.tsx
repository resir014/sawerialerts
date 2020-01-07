import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import { Box, Text, themeProps } from 'components/ui-core'
import Link from 'next/link'
import * as React from 'react'

const Header = Box.withComponent('header')
const Div = Box.withComponent('div')
const Nav = Box.withComponent('nav')
const Anchor = styled(Text.withComponent('a'))`
  color: ${themeGet('colors.foreground', 'white')};
  text-decoration: none;
  margin: 0 ${themeGet('space.md', 16)}px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Navigation: React.SFC = () => {
  return (
    <Header display="grid" gridTemplateColumns={`1fr 1fr minmax(auto, ${themeProps.widths.lg}px) 1fr 1fr`} py="sm" px="lg">
      <Div display="flex" flexDirection="row" alignItems="center" gridColumn="3/4">
        <Div mr="xl">
          <Text fontWeight={600}>sawerialerts</Text>
        </Div>
        <Nav flex="1 1 auto">
          <Link href="/" passHref>
            <Anchor>Alerts</Anchor>
          </Link>
          <Link href="/about" passHref>
            <Anchor>About</Anchor>
          </Link>
        </Nav>
      </Div>
    </Header>
  )
}

export default Navigation
