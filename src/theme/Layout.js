import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { PrefersReducedMotion, SiteResets } from '../styles/base'

const GlobalStyle = createGlobalStyle`
  ${PrefersReducedMotion}
  ${SiteResets}
`

const Layout = ({ children }) => (
  <div className="layout">
    <GlobalStyle />
    {children}
  </div>
)

export default Layout
