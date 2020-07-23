import React from 'react'

import Navigation from './Navigation'

import GlobalStyle from '../styles'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <div className="layout">{children}</div>
  </>
)

export default Layout
