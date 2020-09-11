import React from 'react'
import styled from 'styled-components'
import * as S from './Links'

export const Breadcrumbs = ({ location }) => (
  <Wrapper>
    <S.InnerLink to="/posts">Posts</S.InnerLink>
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
