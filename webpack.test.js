module.exports = require('./webpack.common')({
  build: false,
  cov: !!process.env.COV
})
