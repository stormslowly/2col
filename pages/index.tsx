import Link from 'next/link'
import * as React from 'react'

import {Token, Tokens} from "marked";
import {Links, Segment, TwoColArticle} from "../src/TwoColArticle";

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


const md2ColArticle = `
# test

learn js by python  or learn python by js

# 输出 hello world

\`\`\`JavaScript
console.log('hello world')
\`\`\`

\`\`\`Python
print( 'hello world')
\`\`\`

现在大家学会两个语言的 hello world 了吧


# 定义数组

\`\`\`JavaScript
const  array = []

\`\`\`


\`\`\`python
array = []
\`\`\`


# 遍历数组

\`\`\`JavaScript
// ES6
for(let item of array){
	console.log(item)
}

\`\`\`

\`\`\`Python

for item in array:
	print(item)
\`\`\`


>有志者事竟成

`

type CodeToCompare = [Tokens.Code, Tokens.Code]


function isCodeToCompare(object: Segment): object is CodeToCompare {
  return Array.isArray(object)
}


const SegmentContainer = ({segment, links}: { segment: Segment, links: Links }) => {
  if (isCodeToCompare(segment)) {
    const [left, right] = segment

    return <Compare
      left={TwoColArticle.renderTokenToRawHtml(left, links)}
      leftLang={'JavaScript'}

      right={TwoColArticle.renderTokenToRawHtml(right, links)}
      rightLang={right.lang}
    />
  } else {
    return <div dangerouslySetInnerHTML={{__html: TwoColArticle.renderTokenToRawHtml(segment, links)}}></div>
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


export default () =>
  <div className="site">
    <Link href="/about">
      <a>About</a>
    </Link>
    <h1>开始对比</h1>

    <Article md={md2ColArticle}/>

  </div>

