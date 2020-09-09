import styled from 'styled-components'

import { headerFont, primary, light } from '../../styles'

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0 auto;
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
export const NavRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
