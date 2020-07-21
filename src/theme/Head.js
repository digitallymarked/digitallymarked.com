import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function Head () {
  const { title, description } = useSiteMetadata()
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        href="https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600;700&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}
