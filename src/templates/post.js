import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout, SEO } from '../components'

const Post = ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <h3>{post.frontmatter.author}</h3>
      <MDXRenderer>{post.body}</MDXRenderer>
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
