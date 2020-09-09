import styled from 'styled-components'
import { Link } from 'gatsby'
import { lightDark, primary } from '../styles'

export const InnerLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1pt solid ${primary};
  &:hover {
    color: ${lightDark};
    border-bottom: 1pt solid ${lightDark};
  }
`
export const OuterLink = styled.a`
  text-decoration: underline;
`
