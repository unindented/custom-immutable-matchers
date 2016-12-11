const path = require('path')
const output = path.join(__dirname, '../../dist')

module.exports = {
  debug: false,
  devtool: false,

  entry: {
    'custom-immutable-matchers': './index'
  },

  output: {
    path: output,
    pathinfo: false,

    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },

  externals: {
    immutable: {
      root: 'Immutable',
      amd: 'immutable',
      commonjs: 'immutable',
      commonjs2: 'immutable'
    }
  },

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
