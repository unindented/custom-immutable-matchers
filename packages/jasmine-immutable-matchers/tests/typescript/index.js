const path = require('path')
const tt = require('typescript-definition-tester')

tt.compileDirectory(
  path.resolve(__dirname, '../typescript'),
  fileName => fileName.match(/\.ts$/),
  () => {}
)
