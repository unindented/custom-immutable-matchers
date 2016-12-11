const path = require('path')

module.exports = function (options) {
  options = options || {}

  const output = path.join(__dirname, '../../dist')

  return {
    debug: !options.build,
    devtool: !options.build ? 'inline-source-map' : null,

    entry: {
      'jest-immutable-matchers': './index'
    },

    output: {
      path: output,
      pathinfo: !options.build,

      filename: '[name].js',
      library: '[name]',
      libraryTarget: 'umd'
    },

    externals: options.build ? {
      immutable: {
        root: 'Immutable',
        amd: 'immutable',
        commonjs: 'immutable',
        commonjs2: 'immutable'
      }
    } : {},

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)\//,
          loader: 'babel'
        }
      ]
    }
  }
}
