import Link from 'next/link'
import * as React from 'react'
import * as Marked from 'marked'
import {Token, TokensList} from "marked";

class TwoColumn extends React.Component {


    render() {
        return '2col'
    }
}

type ToCompare = { left: string, right: string }
//      style={{overflowWrap: "break-word"}}

const Compare: React.StatelessComponent<ToCompare> = ({left, right}: ToCompare) => {
    return <div className="flex border-b-2">
        <div className="w-1/2">{left}</div>
        <div className="w-1/2">
            <p style={{overflowWrap: "break-word"}}>
                {right}
            </p>
        </div>
    </div>
}


const md2ColArticle = `
# test

this is a desc \`js\` and \`java\`

# 输出 hello world

\`\`\`JavaScript
console.log('hello world')
\`\`\`

\`\`\`python
print( 'hello world')
\`\`\`
`

type CodeToCompare = [Token, Token]

type Segment = CodeToCompare | Token

function isCodeToCompare(object: any): object is CodeToCompare {
    return Array.isArray(object)
}

const SegmentContainer = ({content}: { content: CodeToCompare | TokensList }) => {
    if (isCodeToCompare(content)) {


    }
}


const NullSegment = {
    type: 'null'
}

function toSegments(md: string): {
    segments: Segment[], links: {
        [key: string]: { href: string; title: string; }
    }
} {

    const tokenList: TokensList = Marked.lexer(md)
    const links = tokenList.links

    const tokens: Token[] = tokenList
    const ss: Segment[] = []

    let lastSegment = tokens[0]

    for (let i = 1; i < tokens.length - 1;) {
        const token = tokens[i]

        if (token.type === 'code' && lastSegment.type === 'code') {
            ss.push([lastSegment, token])
            lastSegment = NullSegment as Token
            i++
        } else {
            ss.push(lastSegment)
            lastSegment = token
            i++
        }
    }


    return {segments: ss, links}
}


const TwoCol = ({md}: { md: string }) => {

    const tokenList: TokensList = Marked.lexer(md)


    return <div className="post">
        {JSON.stringify(tokenList[0])}
    </div>
}


export default () =>
    <div className="container">
        <Link href="/about">
            <a>About</a>
        </Link>
        <h1>开始对比</h1>

        <TwoCol md={md2ColArticle}/>

    </div>




