import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, SEO } from '../components'

const Table = styled.table`
  margin: 0 auto;
  text-align: left;
  & td,
  th {
    padding: 4pt;
  }
`

export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="My Files" />
      <div>
        <h1>My Site's Files</h1>
        <Table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
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
