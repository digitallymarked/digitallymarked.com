import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { useSiteMetadata } from '../hooks/use-site-metadata'

import { headerFont } from '../styles/base/variables'

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0 auto;
  & li {
    margin: 8pt;
    font-size: 24pt;
    font-family: ${headerFont};
  }
`

const Navigation = () => {
  const { nav } = useSiteMetadata()
  return (
    <NavList>
      {nav.map(item => (
        <li key={item.name}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </NavList>
  )
}

export default Navigation
