import styled from 'styled-components'
import { Link } from 'gatsby'
import { primary } from '../styles'

export const InnerLink = styled(Link)`
  text-decoration: none;
  position: relative;
  display: inline-block;
  color: ${primary};
  padding: 0 1px;
  transition: color ease 0.3s;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${primary};
    z-index: -1;
    height: 5%;
  }
  &::before {
    width: 0%;
    left: 0;
    bottom: 0;
    transition: width ease 0.4s;
  }
  &::after {
    width: 100%;
    left: 0;
    bottom: 0;
    transition: all ease 0.6s;
  }
  &:hover {
    &::before {
      width: 100%;
    }
    &::after {
      left: 100%;
      width: 0%;
      transition: all ease 0.2s;
    }
  }
`

export const OuterLink = styled.a`
  text-decoration: underline;
`
