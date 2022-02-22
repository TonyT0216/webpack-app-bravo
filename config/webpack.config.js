const { mode } = require('webpack-nano/argv');
const { merge } = require('webpack-merge');
const paths = require('./paths');

const developmentConfiguration = require('./webpack.dev');
const productionConfiguration = require('./webpack.prod');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfiguration = {
  entry: {
    index: [paths.src + '/index.js'],
  },
  mode,
  output: {
    clean: true,
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

const getConfig = (mode) => {
  switch (mode) {
    case 'production':
      return merge(commonConfiguration, productionConfiguration, { mode });
    case 'development':
      return merge(commonConfiguration, developmentConfiguration, { mode });
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(mode);
