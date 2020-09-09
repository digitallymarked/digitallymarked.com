import React from 'react'
import styled from 'styled-components'
import { InnerLink } from './Links'

export const Breadcrumbs = ({ location }) => (
  <Wrapper>
    <InnerLink to="/posts">Posts</InnerLink>
    <span>/</span>
    <span>{location}</span>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  * {
    margin-right: 4pt;
  }
`
