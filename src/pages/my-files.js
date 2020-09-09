import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, SEO } from '../components'

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

const MyFiles = ({ data }) => {
  console.log(data)
  const results = data.allFile.edges
  return (
    <Layout>
      <SEO title="My Files" />
      <div>
        <h1>My Site's Files</h1>
        <Table>
          <thead>
            <tr>
              <th>Relative Path</th>
              <th>Size</th>
              <th>Extension</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {results.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Layout>
  )
}
export default MyFiles

const Table = styled.table`
  margin: 0 auto;
  text-align: left;
  & td,
  th {
    padding: 4pt;
  }
`
