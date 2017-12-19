import * as marked from 'marked'
import {TokensList} from "marked";

describe('marked lexer', () => {


  // language=Markdown
  const md = `
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


  it('should work', function () {

    const tokensList: TokensList = marked.lexer(md)

    const links = tokensList.links

    const tokens: TokensList = tokensList.slice(0, 1) as TokensList
    tokens.links = links

  });
})
