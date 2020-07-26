import { createGlobalStyle } from 'styled-components'

import { PrefersReducedMotion, Typography } from './base'
const GlobalStyle = createGlobalStyle`
  ${PrefersReducedMotion}
  ${Typography}
`

export default GlobalStyle
