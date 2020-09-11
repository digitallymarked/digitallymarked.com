import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout, SEO, InnerLink, OuterLink, Breadcrumbs } from '../components'

const shortcodes = { InnerLink, OuterLink }

const Post = ({ data: { mdx }, pageContext }) => (
  <Layout>
    <SEO title={mdx.frontmatter.title} />
    <Breadcrumbs location={mdx.frontmatter.title} />
    <div>
      <h1>{mdx.frontmatter.title}</h1>
      <h5>{mdx.frontmatter.date}</h5>
    </div>
    <footer
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ marginRight: 'auto' }}>
        {pageContext.previousPost && (
          <InnerLink to={`/posts/${pageContext.previousPost.frontmatter.slug}`}>
            Next Post is {pageContext.previousPost.frontmatter.title}
          </InnerLink>
        )}
      </div>
      <div>
        {pageContext.nextPost && (
          <InnerLink to={`/posts/${pageContext.nextPost.frontmatter.slug}`}>
            Previous Post is {pageContext.nextPost.frontmatter.title}
          </InnerLink>
        )}
      </div>
    </footer>
    <MDXProvider components={shortcodes}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </MDXProvider>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
export default Post
