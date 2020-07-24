import React from 'react'
import styled from 'styled-components'

import Navigation from './Navigation'
import GlobalStyle from '../styles'

const LayoutWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  text-align: center;
`

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <LayoutWrapper>
      <Navigation />
      {children}
    </LayoutWrapper>
  </>
)

// export default Layout
