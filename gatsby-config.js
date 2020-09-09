module.exports = {
  siteMetadata: {
    title: `DigitallyMarked - The Digital Space of Mark Markov`,
    description: `
      This is the personal digital space of Mark Markov. You can find both fun and quirky stuff as well as some more serious and inspirational ones.
    `,
    siteUrl: 'https://www.digitallymarked.com/',
    nav: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About Me',
        link: '/about-me',
      },
      {
        name: 'My Files',
        link: '/my-files',
      },
      {
        name: 'Posts',
        link: '/posts',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              showCaptions: [`title`],
              tracedSVG: {
                color: `red`,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
