import Link from "gatsby-link"
import * as React from 'react'

import {CompareSegment, Links, Segment, TwoColArticle} from "../TwoColArticle";

type ToCompare = { left: string, right: string, leftLang?: string, rightLang?: string }
//      style={{overflowWrap: "break-word"}}

const Compare: React.StatelessComponent<ToCompare> = ({left, right, leftLang, rightLang}: ToCompare) => {
  return <div className="flex border-b-2 bg-grey">
    <div
      className="w-1/2 relative"
    >

      <span
        className="absolute pin-l pin-t bg-teal-dark rounded-full px-2"
      >
        {leftLang}
        </span>
      <div className="pt-6 pb-3 bg-grey"
           dangerouslySetInnerHTML={{__html: left}}
      ></div>

    </div>
    <div className="w-1/2 relative bg-grey">
      <span
        className="absolute pin-l pin-t bg-teal-dark rounded-full px-2"
      >{rightLang}</span>
      <div className="pt-6 pb-3 bg-grey"
           dangerouslySetInnerHTML={{__html: right}}></div>
    </div>
  </div>
}

function isCodeToCompare(object: Segment): object is CompareSegment {
  return object.type === 'compare'
}


const SegmentContainer = ({segment, links}: { segment: Segment, links: Links }) => {
  if (isCodeToCompare(segment)) {
    const [left, right] = segment.tokens

    return <Compare
      left={TwoColArticle.renderTokenToRawHtml(left, links)}
      leftLang={left.lang}

      right={TwoColArticle.renderTokenToRawHtml(right, links)}
      rightLang={right.lang}
    />
  } else {
    return <div dangerouslySetInnerHTML={{__html: TwoColArticle.renderTokensToRawHtml(segment.tokens, links)}}></div>
  }
}


const Article = ({md}: { md: string }) => {
  const tca = new TwoColArticle(md)
  return <div className="post">
    {tca.segments.map((seg, i) => <SegmentContainer
      segment={seg}
      links={tca.links}
      key={i}/>)}
  </div>
}


export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      internal {
        content
      }
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`


export default (props) => {
  const {data, location} = props
  const {markdownRemark: post} = data
  const {frontmatter, internal: {content}} = post

  return <div className="site">
    <h1 className="text-5xl font-sans">{frontmatter.title}</h1>
    <Article md={content.replace(/---\n[\w\W]+---/, '')}/>
  </div>
}
