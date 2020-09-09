import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../../utils'

import PostsLink from './PostsLink'
import * as S from './styles'

const PageLinks = () => {
  const { nav } = useSiteMetadata()
  const noPosts = nav.filter(nav => nav.link !== '/posts')
  return (
    <>
      {noPosts.map(item => (
        <S.NavListItem key={item.name}>
          <Link to={item.link} activeClassName="active">
            {item.name}
          </Link>
        </S.NavListItem>
      ))}
      <S.NavListItem>
        <PostsLink to="/posts">Posts</PostsLink>
      </S.NavListItem>
    </>
  )
}

export default PageLinks
