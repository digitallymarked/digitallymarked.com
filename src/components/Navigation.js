import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { useSiteMetadata } from '../hooks/use-site-metadata'

import { headerFont } from '../utils/variables'

const Pages = () => {
  const { nav } = useSiteMetadata()
  return (
    <>
      {nav.map(item => (
        <li key={item.name}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </>
  )
}

const Posts = () => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)
  const posts = allMdx.nodes
  return (
    <>
      {posts.map(post => {
        const { title, slug } = post.frontmatter
        return (
          <li key={title}>
            <Link to={`/posts/${slug}`}>{title}</Link>
          </li>
        )
      })}
    </>
  )
}

const Navigation = () => {
  return (
    <NavList>
      <Row>
        <Pages />
      </Row>
      <Row>
        <Posts />
      </Row>
    </NavList>
  )
}

export default Navigation

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0 auto;
  & li {
    margin: 8pt;
    font-size: 24pt;
    font-family: ${headerFont};
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
