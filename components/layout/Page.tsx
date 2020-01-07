import * as React from 'react'
import Head from 'next/head'
import LayoutRoot from './LayoutRoot'
import Navigation from './Navigation'

interface PageProps {
  title?: string
}

const Page: React.SFC<PageProps> = ({ children, title }) => (
  <LayoutRoot>
    <Head>
      <title>{title === 'Home' ? 'sawerialerts' : `${title} | sawerialerts`}</title>
      <meta name="description" content="Saweria Alerts Customizer" />,
      <meta property="og:title" content={title} />
      <meta property="og:description" content="Saweria Alerts Customizer" />,
    </Head>
    <Navigation />
    {children}
  </LayoutRoot>
)

export default Page
