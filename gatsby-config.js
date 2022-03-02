module.exports = {
  siteMetadata: {
    title: `Lily So Full Stack Developer`,
    description: `Lily So - Full Stack Developer. Gatsby, MongoDB, Express, React, Node, MySQL, GraphQL.`,
    author: `@lilyso`,
    siteUrl: `https://lilyso.net`,
    menuLinks: [
      {
        name: "ABOUT",
        link: "/about",
      },
      {
        name: "EXPERIENCE",
        link: "/experience",
      },
      {
        name: "WORK",
        link: "/work",
      },
      {
        name: "CONTACT",
        link: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
