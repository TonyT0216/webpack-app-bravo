const { mode } = require('webpack-nano/argv');
const paths = require('./paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [paths.src + '/index.js'],
  mode,
  output: {
    filename: '[name].bundle.js',
    path: paths.build,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.m?.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
};
