import * as React from 'react'
import { reset, global, Box } from 'components/ui-core'

const LayoutRoot: React.SFC = ({ children }) => (
  <Box display="flex" flexDirection="column" minHeight="100vh" overflowX="hidden" color="foreground" backgroundColor="background">
    {children}
    <style jsx global>
      {reset}
    </style>
    <style jsx global>
      {global}
    </style>
  </Box>
)

export default LayoutRoot
