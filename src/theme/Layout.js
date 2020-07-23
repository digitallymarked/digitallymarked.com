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
  <>
    <GlobalStyle />
    <Navigation />
    <div className="layout">{children}</div>
  </>
)

export default Layout
