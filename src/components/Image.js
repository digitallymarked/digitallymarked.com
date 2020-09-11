import React from 'react'
import Img from 'gatsby-image'
import { useSingleImage } from '../utils'

export const Image = ({ name }) => {
  const getImage = useSingleImage().filter(img => img.node.name === name)[0]
    .node

  return <Img fluid={getImage.childImageSharp.fluid} />
}
