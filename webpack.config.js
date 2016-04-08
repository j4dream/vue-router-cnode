var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		'./app/main.js'
	],
	output: {
		path: './build',
		publicPath: '/build',
		filename: 'build.js',
	},
	module: {
		loaders: [
			{ test: /\.vue$/, exclude: /node_modules/, loader: 'vue' },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
		]
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		extensions: ['', '.js', '.vue']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		})
	]
}