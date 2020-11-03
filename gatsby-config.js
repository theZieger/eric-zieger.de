module.exports = {
  siteMetadata: {
    title: `Eric Zieger (@thezieger) - Frontend Developer`,
    description: `Frontend Developer and Media Designer from Leipzig, Deutschland.`,
    author: {
      name: `Eric`,
      handle: `@thezieger`,
    },
    social: {
      twitter: `https://twitter.com/thezieger`,
    },
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eric Zieger (@thezieger) - Frontend Developer`,
        short_name: `Eric Zieger`,
        start_url: `/`,
        background_color: `#121217`,
        theme_color: `#121217`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 576,
              quality: 50,
              backgroundColor: "#10da75",
              withWebp: true,
              tracedSVG: true,
              srcSetBreakpoints: [284, 324, 375, 532],
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                link: "link",
              },
            },
          },
        ],
      },
    },
  ],
}
