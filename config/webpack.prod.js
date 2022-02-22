const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./paths');

module.exports = {
  mode: 'production',
  output: {
    assetModuleFilename: '[name].[contenthash][ext][query]',
    chunkFilename: '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
    path: paths.build,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
};
