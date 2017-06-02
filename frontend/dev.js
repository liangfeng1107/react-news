const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./base.js');

const HOST = '0.0.0.0';
const PORT = 3002;

module.exports = function (env) {
  return webpackMerge(commonConfig(env), {
    entry: {
      index: [
        'react-hot-loader/patch',
        // activate HMR for React
        'webpack-dev-server/client?http://localhost:3002',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        'babel-polyfill',
        'index.js'
      ]
    },
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin()
      // {
      //   // filename: 'index.html',
      //   // hash: true,
      //   // template: path.resolve('./src/index.html')
      //   // favicon: path.resolve('./src/assets/images/mushroom.jpg')
      // }
      // )
    ],
    devServer: {
      contentBase: './src',
      historyApiFallback: true,
      hot: true,
      host: HOST,
      port: PORT,
      stats: {
        cached: true,
        cachedAssets: true,
        chunks: true,
        chunkModules: false,
        colors: true,
        hash: false,
        reasons: true,
        timings: true,
        version: false
      },
      proxy: {
        '/': {
          target: 'http://localhost:5000/'
          // pathRewrite: { '^/api': '' }
        }
      }
    }
  });
};