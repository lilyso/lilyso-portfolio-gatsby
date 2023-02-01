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
        display: `minimal-ui`,
        icon: `src/images/icons/favicon-32x32.png`, 
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-C7X5K331P6", // Google Analytics / GA
        ],
      },
    },
  ],
}
