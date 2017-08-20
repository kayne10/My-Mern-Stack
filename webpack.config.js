var webpack = require('webpack')
var path = require('path')

module.exports = {
  // find react code here
  entry: {
    app: './src/app.js'
  },
  // once done compiling, store the results here
  output: {
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
