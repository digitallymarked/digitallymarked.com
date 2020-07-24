import { createGlobalStyle } from 'styled-components'

import { PrefersReducedMotion, SiteResets, Typography } from './base'
const GlobalStyle = createGlobalStyle`
  ${PrefersReducedMotion}
  ${SiteResets}
  ${Typography}
`

export default GlobalStyle
