import * as React from 'react'
import { reset, Box } from 'components/ui-core'

const OverlayRoot: React.SFC = ({ children }) => (
  <Box display="flex" flexDirection="column" width="100%" height="100%" minHeight="100vh" overflow="hidden">
    {children}
    <style jsx global>
      {reset}
    </style>
  </Box>
)

export default OverlayRoot
