module.exports = {
  siteMetadata: {
    siteName: `Using Typescript Example`,
  },
  plugins: [
    // Add typescript stack into webpack
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    },
  ],
}
