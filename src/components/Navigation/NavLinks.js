import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../../utils'

import * as S from './styles'

const PostsLink = () => {
  //Get all links
  const { nav } = useSiteMetadata()

  //Filter out only the link for Posts
  const invalidPaths = nav
    .filter(nav => nav.link !== '/posts')
    .map(nav => nav.link)

  const isActive = ({ location }) => {
    if (!invalidPaths.includes(location.pathname)) {
      return { className: 'active' }
    }
    return null
  }

  return (
    <S.NavListItem>
      <Link getProps={isActive} to="/posts">
        Posts
      </Link>
    </S.NavListItem>
  )
}

const PageLinks = () => {
  //Get all links
  const { nav } = useSiteMetadata()

  //Remove the Posts link from them
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
    </>
  )
}
const NavLinks = () => (
  <>
    <PageLinks />
    <PostsLink />
  </>
)

export default NavLinks
