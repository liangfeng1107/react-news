const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
  return webpackMerge(commonConfig(env), {
    entry: {
      index: [
        'babel-polyfill',
        './src/index'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[chunkhash].js'
      // publicPath: '/'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        hash: true,
        template: path.resolve('./src/index.html')
      })
    ]
  });
};