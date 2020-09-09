import React from 'react'
import { Link } from 'gatsby'

import { useSiteMetadata } from '../../utils'

const PostsLink = ({ children, ...props }) => {
  const { nav } = useSiteMetadata()
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
    <Link getProps={isActive} {...props}>
      {children}
    </Link>
  )
}

export default PostsLink
