import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Head = ({ pageTitle }) => {
  const { title, description } = useSiteMetadata()
  const meta = {
    title: pageTitle ? `${pageTitle} | ${title}` : title,
  }
  return (
    <Helmet title={meta.title}>
      <meta name="description" content={description} />
      <link
        href="https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600;700&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />

      {/* Favicon stuff from realfavicongenerator.net */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3687e1" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  )
}

export default Head
