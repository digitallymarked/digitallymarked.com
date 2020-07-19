import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { PrefersReducedMotion, SiteResets, Typography } from '../styles/base'
import Head from './Head'

const GlobalStyle = createGlobalStyle`
  ${PrefersReducedMotion}
  ${SiteResets}
  ${Typography}
`

const Layout = ({ children }) => (
  <div className="layout">
    <Head/>
    <GlobalStyle />
    {children}
  </div>
)

export default Layout
