exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
          previous {
            frontmatter {
              title
              slug
            }
          }
          next {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed on post creation', result.errors)
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node, next, previous }) => {
    actions.createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: node.frontmatter.slug,
        previousPost: previous,
        nextPost: next,
      },
    })
  })
}
