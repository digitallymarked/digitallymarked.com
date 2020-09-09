import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, InnerLink } from '../components'

export default ({ data }) => {
  const posts = data.allMdx.nodes
  return (
    <Layout>
      <SEO title="Posts" />
      <h1>All posts should go here</h1>
      <ul style={{ margin: `0 auto` }}>
        {posts.map(post => {
          const { title, slug, date } = post.frontmatter
          return (
            <li key={title} style={{ padding: `1rem`, textAlign: `left` }}>
              <InnerLink to={`/posts/${slug}`}>
                {date} - {title}
              </InnerLink>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "D MMM, YYYY")
        }
      }
    }
  }
`
