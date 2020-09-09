import React from 'react'

import PageLinks from './PageLinks'
import * as S from './styles'

export const Navigation = () => (
  <S.NavList>
    <S.NavRow>
      <PageLinks />
    </S.NavRow>
  </S.NavList>
)
