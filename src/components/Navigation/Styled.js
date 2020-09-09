import styled from 'styled-components'
import { Link } from 'gatsby'

import { headerFont } from '../../styles'

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0 auto;
  li {
    margin: 8pt;
    font-size: 24pt;
    font-family: ${headerFont};
  }
`

export const NavListItem = styled.li`
  & > a {
    text-decoration: none;
    &.active {
      text-decoration: underline;
    }
  }
`
export const NavRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const NavLink = styled(Link)``
