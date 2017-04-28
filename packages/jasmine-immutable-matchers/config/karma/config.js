const path = require('path')
const webpackConfig = require('../webpack/test')
const webpackServerConfig = require('../webpack/server')

const basePath = path.resolve(__dirname, '../..')

module.exports = function (config) {
  config.set({
    basePath: basePath,

    webpack: webpackConfig,
    webpackServer: webpackServerConfig,
    webpackPort: 9875,
    port: 9876,

    files: [
      {pattern: 'index.js', watched: true, included: false, served: false},
      {pattern: 'tests/**/*.js', watched: true, included: true, served: true}
    ],

    exclude: [
      'tests/typescript/**/*.*'
    ],

    preprocessors: {
      'tests/**/*.js': ['webpack']
    },

    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: ['dots']
  })
}
