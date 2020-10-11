import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
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

export default useSiteMetadata
