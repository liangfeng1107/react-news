const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
  const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: env === 'development'
  });
  return {
    resolve: {
      extensions: ['.js', 'json', '.jsx', '*']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.s?css$/,
          use: extractSass.extract({
            use: [{
              loader: 'css-loader'
            }, {
              loader: 'sass-loader'
            }],
            fallback: 'style-loader'
          }),
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: 'url-loader?limit=10240'
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: 'url-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
      }),
      extractSass
    ]
  };
};
