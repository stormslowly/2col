import {Token, TokensList} from "marked";
import * as Marked from "marked";


type CodeToCompare = [Token, Token]

type Segment = CodeToCompare | Token

const NullSegment = {
  type: 'null'
}

type Links = {
  [key: string]: { href: string; title: string; }
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


export class TwoColArticle {

  private mySegments: Segment[] = []
  private links: Links;

  constructor(md: string) {
    console.log(`${__filename}:57 constructor`);
    const tokensList: TokensList = Marked.lexer(md)

    this.links = tokensList.links

    const tokens: Token[] = tokensList
    const ss: Segment[] = tokens

    console.log(`${__filename}:64 constructor`, tokens);

    this.mySegments = ss
  }

  get segments(): Segment[] {
    return this.mySegments
  }
}

