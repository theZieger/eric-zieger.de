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
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: "eric-zieger.de",
        ErrorDocument: `
          ErrorDocument 404 /404.html
        `,
        custom: `
            # This is a custom rule!
            # This is a another custom rule!
        `,
      },
    },
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
        icon_options: {
          purpose: `any maskable`,
        },
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
              withAvif: true,
              loading: "lazy",
              tracedSVG: true,
              srcSetBreakpoints: [284, 324, 375, 532],
            },
          },
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
