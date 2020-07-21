import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          nav {
            link
            name
          }
        }
      }
    }
  `)
  return site.siteMetadata
}
