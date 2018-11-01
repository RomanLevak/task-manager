const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
	entry: './src/scripts/index.js',
	output:
	{
		path: path.resolve('./public/scripts'),
		filename: 'index.js'
	},
	module:
	{
		rules: [
		{
			test: /\.less$/,
			use: [
			{
				loader: 'style-loader'
			},
			{
				loader: 'css-loader'
			},
			{
				loader: 'less-loader'
			}]
		}]
	},
	devtool: 'sourcemaps',
	mode: 'development',
	watch: true,
	plugins: [
		new BrowserSyncPlugin(
		{
			port: 6060,
			files: ['./public/*.html', './public/styles/*.css'],
			server:
			{
				baseDir: ['./public']
			}
		})
	]
}