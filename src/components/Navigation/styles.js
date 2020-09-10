import styled from 'styled-components'

import { headerFont, primary, light } from '../../styles'

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0 auto;
  justify-content: center;
`

export const NavListItem = styled.li`
  margin: 8pt;
  font-size: 24pt;
  font-family: ${headerFont};
  & > a {
    padding: 4pt 16pt;
    border-radius: 4pt;
    text-decoration: none;
    &.active {
      color: ${light};
      background-color: ${primary};
    }
  }
`
