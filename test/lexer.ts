import * as marked from 'marked'
import {TokensList} from "marked";

describe('marked lexer', () => {


    const md = `
# test

this is a desc \`js\` and \`java\`

\`\`\`JavaScript
console.log('test')
\`\`\`

\`\`\`java
print 'test'
\`\`\`
`


    it('should work', function () {
        console.log(marked.lexer(md))

        const tokenlist: TokensList = marked.lexer(md)

        const links = tokenlist.links

        const tokens: TokensList = tokenlist.slice(0, 1) as TokensList
        tokens.links = links

        console.log(`${__filename}:26 `, marked.parser(tokens));
    });
})