import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css'

import Navigation from './Navigation'
import { PrefersReducedMotion, Typography } from '../styles'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <LayoutWrapper>
      <Navigation />
      <Main>{children}</Main>
    </LayoutWrapper>
  </>
)

export default Layout

const GlobalStyles = createGlobalStyle`
  ${PrefersReducedMotion}
  ${Typography}
`

const LayoutWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  text-align: center;
  padding-top: 16pt;
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 75%;
`
