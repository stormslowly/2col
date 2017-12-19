import {Token, Tokens, TokensList} from "marked";
import * as Marked from "marked";
import Code = marked.Tokens.Code;

export type Links = {
  [key: string]: { href: string; title: string; }
}


export type NormalSegment = {
  type: 'normal',
  tokens: Token[]
}

export type CompareSegment = {
  type: 'compare',
  tokens: [Code, Code]
}

export type Segment = NormalSegment | CompareSegment

export class TwoColArticle {

  private mySegments: Segment[] = []
  private myLinks: Links;

  constructor(md: string) {
    const tokensList: TokensList = Marked.lexer(md)
    this.myLinks = tokensList.links
    this.mySegments = this.mergeSegment(tokensList)
  }

  private mergeSegment(tokens: Token[]) {

    const ss: Segment[] = []

    const nTokens = tokens.length
    let i = 0
    let normalTokens: Token[] = []
    while (i < nTokens) {
      const currentToken = tokens[i]
      const nextToken = tokens[i + 1]

      if (nextToken && nextToken.type === "code" && currentToken.type === 'code') {
        if (normalTokens.length) {
          ss.push({type: 'normal', tokens: normalTokens})
          normalTokens = []
        }
        ss.push({type: 'compare', tokens: [currentToken, nextToken]})

        i += 2
      } else {
        normalTokens.push(currentToken)
        i += 1
      }
    }
    if (normalTokens.length) {
      ss.push({type: 'normal', tokens: normalTokens})
    }

    return ss
  }

  get segments(): Segment[] {
    return this.mySegments
  }

  get links() {
    return this.myLinks
  }

  static renderTokenToRawHtml(token: Token, links: Links): string {
    const toRender: TokensList = [token] as TokensList
    toRender.links = links

    return Marked.parser(toRender)
  }

  static renderTokensToRawHtml(tokens: Token[], links: Links): string {
    const toRender: TokensList = tokens as TokensList
    toRender.links = links

    return Marked.parser(toRender)
  }

}

