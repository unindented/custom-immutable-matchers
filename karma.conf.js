const path = require('path')
const webpackConfig = require('./webpack.test')
const webpackServerConfig = require('./webpack.server')

const basePath = __dirname
const coveragePath = path.join(__dirname, 'coverage')

module.exports = function (config) {
  config.set({
    basePath: basePath,

    webpack: webpackConfig,
    webpackServer: webpackServerConfig,
    webpackPort: 9875,
    port: 9876,

    files: [
      {pattern: 'index.js', watched: true, included: false, served: false},
      {pattern: 'test/**/*.js', watched: true, included: true, served: true}
    ],

    exclude: [
      'coverage/**/*.*',
      'test/typescript/**/*.*'
    ],

    preprocessors: {
      'test/**/*.js': ['webpack']
    },

    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: process.env.COV ? ['dots', 'coverage'] : ['dots'],

    coverageReporter: {
      reporters: [
        {type: 'text', dir: coveragePath},
        {type: 'lcov', dir: coveragePath},
        {type: 'html', dir: coveragePath}
      ]
    }
  })
}
