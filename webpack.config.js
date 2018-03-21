const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins = [
	new HtmlWebpackPlugin({ template: 'src/index.html' }),
	new webpack.ProvidePlugin({
		THREE: 'three',
	}),
	new Dotenv(),
	new CopyWebpackPlugin([{ from: '**/models/*.jpg', to: '.', flatten: true }]),
	new CleanWebpackPlugin(['dist']),
];

let optimization = {};
if (process.env.NODE_ENV === 'production') {
	optimization = {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	};
}

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
			{ test: /\.(obj|mtl|dae)$/, use: ['file-loader'] },
			// images
			{ test: /\.(jpg|jpeg|png)$/, use: ['file-loader'] },
		],
	},
	optimization,
	plugins,
	devServer: {
		host: '0.0.0.0',
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'dist'),
	},
};
