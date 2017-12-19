import Link from "gatsby-link"
import * as React from 'react'

export const query = graphql`
  query allPosts {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            path
            title
            date(formatString: "MM月DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`


export default ({data}) => {

  const posts = data.allMarkdownRemark.edges

  return <div className="site">
    <Link to="/about">
      About
    </Link>
    <h1>开始对比1</h1>
    {
      posts.map(p => {
        const frontmatter = p.node.frontmatter
        return <div>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <Link to={frontmatter.path}>view</Link>
        </div>
      })
    }
  </div>
}
