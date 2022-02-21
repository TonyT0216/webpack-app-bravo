const { mode } = require('webpack-nano/argv');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode,
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
}