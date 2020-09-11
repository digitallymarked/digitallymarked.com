import React from 'react'
import Img from 'gatsby-image'
import { useImage } from '../utils'

export const Image = ({ name }) => {
  const getImage = useImage().filter(img => img.node.name === name)[0].node

  return <Img fluid={getImage.childImageSharp.fluid} />
}
