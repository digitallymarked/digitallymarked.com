import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components'

const Post = ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <h3>{post.frontmatter.author}</h3>
      <p>{post.body}</p>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        author
        title
      }
      body
    }
  }
`

export default Post
