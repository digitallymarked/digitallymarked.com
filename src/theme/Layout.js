import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { Navigation } from '../components/Navigation'

import { PrefersReducedMotion, SiteResets, Typography } from '../styles/base'

const GlobalStyle = createGlobalStyle`
  ${PrefersReducedMotion}
  ${SiteResets}
  ${Typography}
`

const Layout = ({ children }) => (
  <div className="layout">
    <GlobalStyle />
    <Navigation />
    {children}
  </div>
)

export default Layout
