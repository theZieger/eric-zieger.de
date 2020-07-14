module.exports = {
  siteMetadata: {
    title: `Eric Zieger (@thezieger) - Frontend Developer`,
    description: `Frontend Developer and Media Designer from Leipzig, Deutschland.`,
    author: `@thezieger`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eric Zieger (@thezieger) - Frontend Developer`,
        short_name: `Eric Zieger`,
        start_url: `/`,
        background_color: `#121217`,
        theme_color: `#121217`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
  ],
}
