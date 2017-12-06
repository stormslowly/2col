"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const marked = require("marked");
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
`;
    it('should work', function () {
        console.log(marked.lexer(md));
        const tokenlist = marked.lexer(md);
        const links = tokenlist.links;
        const tokens = tokenlist.slice(0, 1);
        tokens.links = links;
        console.log(`${__filename}:26 `, marked.parser(tokens));
    });
});
