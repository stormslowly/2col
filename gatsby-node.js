const path = require('path')

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions
  const blogPostTemplate = path.resolve(`src/templates/post.tsx`)

  // If you are experiencing issues with the ordering of the posts on the homepage,
  // replace the `allMarkdownRemark` line below with something like this:
  // allMarkdownRemark(sort:{fields:[frontmatter___date], order: ASC}) {

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
					internal{
            content
          }
          frontmatter {
            date
            path
            title
            excerpt
            tags
          }
        }
      }
    }
  }
  `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges

      posts.forEach(({node}, index) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate
        })
      })
    })
}

