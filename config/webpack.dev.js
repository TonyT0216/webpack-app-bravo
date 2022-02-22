const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const paths = require('./paths');
const options = {
  liveReload: true,
  hmr: true,
  progress: 'minimal',
  port: process.env.PORT || 8081,
  static: paths.build,
  waitForBuild: true,
};

module.exports = {
  mode: 'development',
  entry: [paths.src, 'webpack-plugin-serve/client'],
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: [require('tailwindcss')()] }, sourceMap: true },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [new Serve(options)],
  watch: true,
};
