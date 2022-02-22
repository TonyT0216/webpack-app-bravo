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
  entry: [paths.src, 'webpack-plugin-serve/client'],
  plugins: [new Serve(options)],
  watch: true,
};
