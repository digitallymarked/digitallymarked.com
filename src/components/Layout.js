import React from 'react'
import styled from 'styled-components'
import 'normalize.css'

import Navigation from './Navigation'
import GlobalStyle from '../utils'

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
