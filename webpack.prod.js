const {name} = require('./package.json');
const path = require('path');
const commonConfig = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  ...commonConfig,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${name}.min.js`,
    library: 'ChartjsPluginA11y',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
