module.exports = {
  siteMetadata: {
    siteName: `Using Typescript Example`,
  },
  plugins: [
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    }
  ],
}
