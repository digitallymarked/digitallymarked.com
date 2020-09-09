import styled from 'styled-components'
import { Link } from 'gatsby'
import { primary, light } from '../styles'

export const InnerLink = styled(Link)`
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
  &:hover {
    background-color: ${primary};
    color: ${light};
  }
`
export const OuterLink = styled.a`
  text-decoration: underline;
`
