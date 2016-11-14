'use strict'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './main.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.bundle.js'
  },
  devtool: 'inline-sourcemap',
  module: {
    loaders: [{
      test: /\.ts/,
      exclude: /node_modules/,
      loaders: ['ts', 'angular2-template-loader']
    }, {
      test: /\.html$/,
      loader: 'html'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devServer: {
    contentBase: 'dist',
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
