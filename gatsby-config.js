/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `DigitallyMarked - The Digital Space of Mark Markov`,
    description: `
      This is the personal digital space of Mark Markov. You can find both fun and quirky stuff as well as some more serious and inspirational ones.
    `,
    nav: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About Me',
        link: '/about-me',
      },
    ],
  },
  plugins: [`gatsby-plugin-styled-components`, `gatsby-plugin-react-helmet`],
}
