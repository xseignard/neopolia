const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const plugins = [
	new HtmlWebpackPlugin({ template: 'src/index.html' }),
	new webpack.ProvidePlugin({
		THREE: 'three',
	}),
	new Dotenv(),
];

module.exports = {
	entry: ['babel-polyfill', './src/main.js'],
	// mode: 'development',
	module: {
		rules: [
			// js
			{ test: /\.js$/, use: ['babel-loader'], include: [path.resolve(__dirname, 'src')] },
			// css
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
			// svg
			{ test: /\.svg$/, use: ['svg-react-loader'] },
			// 3D models
			{ test: /\.(obj|mtl)$/, use: ['file-loader'] },
		],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
	plugins,
	devServer: {
		host: '0.0.0.0',
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'dist'),
	},
};
