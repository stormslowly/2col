import * as marked from 'marked'
import {TokensList} from "marked";

describe('marked lexer', () => {


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
        console.log(marked.lexer(md))

        const tokensList: TokensList = marked.lexer(md)

        const links = tokensList.links

        const tokens: TokensList = tokensList.slice(0, 1) as TokensList
        tokens.links = links

        console.log(`${__filename}:26 `, marked.parser(tokens));
    });
})