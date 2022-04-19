module.exports = {
  siteMetadata: {
    title: `Lily So Full Stack Developer`,
    description: `Lily So - Full Stack Developer. Gatsby, MongoDB, Express, React, Node, MySQL, GraphQL.`,
    author: `@lilyso`,
    siteUrl: `https://lilyso.net`,
    menuLinks: [
      {
        name: "ABOUT",
        link: "#about",
      },
      {
        name: "PROJECTS",
        link: "#projects",
      },
      {
        name: "CONTACT",
        link: "#contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 1000,
      },
    },
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
        name: `Lily So Web Dev`,
        short_name: `Lily So`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
