import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css'

import Navigation from './Navigation'
import { PrefersReducedMotion, Typography } from '../styles'

export const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <LayoutWrapper>
      <Navigation />
      {children}
    </LayoutWrapper>
  </>
)

const GlobalStyles = createGlobalStyle`
  ${PrefersReducedMotion}
  ${Typography}
`

const LayoutWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  text-align: center;
`
