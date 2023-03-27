const {name} = require('./package.json');
const path = require('path');
const commonConfig = require('./webpack.common');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...commonConfig,
  entry: './demo/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: `${name}.js`,
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './demo/index.html',
      publicPath: './',
      hash: true,
    }),
  ],
};
