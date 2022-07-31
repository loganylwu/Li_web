import { Node } from 'acorn';

const acorn = require('acorn');

interface ASTParserResult {
  parse: Node;
}

export default (): ASTParserResult => {
  const code = `import "hello.js"

var a = 2;

// test
function name() { console.log(arguments); }`;
  const parse = acorn.parse(code, { ecmaVersion: 2020 });
  return { parse };
};
