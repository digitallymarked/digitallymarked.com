import { useStaticQuery, graphql } from 'gatsby'

const useSingleImage = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images" } }) {
        edges {
          node {
            childImageSharp {
              fluid(
                traceSVG: { color: "#0466c8", turnPolicy: TURNPOLICY_MAJORITY }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
            name
          }
        }
      }
    }
  `)
  return allFile.edges
}

export default useSingleImage
