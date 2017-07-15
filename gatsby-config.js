module.exports = {
  siteMetadata: {
    title: "The Drab",
    author: "The Sussex Comedy Society",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    {
      resolve: `@comsoc/gatsby-transformer-mdast`,
      options: {
        plugins: [
          "@comsoc/gatsby-mdast-copy-linked-files",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
