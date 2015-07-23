'use strict';

module.exports = require('./webpack.common')({
  build: false,
  lint: true,
  cov: !!process.env.COV
});
