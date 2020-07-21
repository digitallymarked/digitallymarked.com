import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

const Navigation = () => {
  const { nav } = useSiteMetadata()
  return (
    <ul>
      {nav.map(item => (
        <li key={item.name}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
