import React from 'react'
import { useSiteMetadata } from '../../utils'
import PostsLink from './PostsLink'
import { Link } from 'gatsby'
import { NavListItem } from './Styled'

const PageLinks = () => {
  const { nav } = useSiteMetadata()
  const noPosts = nav.filter(nav => nav.link !== '/posts')
  return (
    <>
      {noPosts.map(item => (
        <NavListItem key={item.name}>
          <Link to={item.link} activeClassName="active">
            {item.name}
          </Link>
        </NavListItem>
      ))}
      <NavListItem>
        <PostsLink to="/posts">Posts</PostsLink>
      </NavListItem>
    </>
  )
}

export default PageLinks
