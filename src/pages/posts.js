import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, InnerLink } from '../components'
import { primary, light } from '../styles'

export default ({ data }) => {
  const posts = data.allMdx.nodes
  return (
    <Layout>
      <SEO title="Posts" />
      <h1>All posts should go here</h1>
      <ul style={{ listStyle: `none`, margin: `0 auto` }}>
        {posts.map(post => {
          const { title, slug, date } = post.frontmatter
          return (
            <li key={title} style={{ padding: `1rem`, textAlign: `left` }}>
              <InnerLink
                to={`/posts/${slug}`}
                style={{
                  padding: `0.5rem`,
                  borderRadius: `4pt`,
                  paddingLeft: `0`,
                }}
              >
                <span
                  style={{
                    backgroundColor: `${primary}`,
                    padding: `0.5rem`,
                    borderRadius: `4pt`,
                    color: `${light}`,
                  }}
                >
                  {date}
                </span>{' '}
                {title}
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
