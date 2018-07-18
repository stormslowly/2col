import * as React from 'react'
import {graphql} from 'gatsby'

import {CompareSegment, Links, Segment, TwoColArticle} from "../TwoColArticle";

type ToCompare = { leftText: string, rightText: string, leftLang?: string, rightLang?: string }
//      style={{overflowWrap: "break-word"}}

import SyntaxHighlighter from 'react-syntax-highlighter/prism';


const Compare: React.StatelessComponent<ToCompare> = ({leftText, rightText, leftLang, rightLang}: ToCompare) => {

  return <div className="flex border-b-2 ">
    <div
      className="left-code border-r-2 border-dashed border-grey-dark"
    >

      <span
        className="absolute pin-l pin-t bg-teal-dark rounded-full px-2"
      >
        {leftLang}
        </span>
      <div className="pt-6 pb-3 "
      >
        <SyntaxHighlighter language={leftLang.toLowerCase()}>
          {leftText}
        </SyntaxHighlighter>
      </div>
    </div>

    <div className="right-code">
      <span
        className="absolute pin-l pin-t bg-teal-dark rounded-full px-2"
      >{rightLang}</span>
      <div className="pt-6 pb-3">
        <SyntaxHighlighter language={rightLang.toLowerCase()}>
          {rightText}
        </SyntaxHighlighter>
      </div>
    </div>
  </div>
}

function isCodeToCompare(object: Segment): object is CompareSegment {
  return object.type === 'compare'
}


const SegmentContainer = ({segment, links}: { segment: Segment, links: Links }) => {
  if (isCodeToCompare(segment)) {
    const [left, right] = segment.tokens

    console.log(`${__filename}:45 SegmentContainer\n`, left);

    return <Compare
      leftText={left.text}
      leftLang={left.lang}

      rightText={right.text}
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
