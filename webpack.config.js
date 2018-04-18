const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const plugins = [
	new HtmlWebpackPlugin({ template: 'src/index.html' }),
	new webpack.ProvidePlugin({
		THREE: 'three',
	}),
	new Dotenv(),
	new CopyWebpackPlugin([{ from: '**/models/*.jpg', to: '.', flatten: true }]),
	new CleanWebpackPlugin(['dist']),
	new MiniCssExtractPlugin(),
];

let optimization = {};
if (process.env.NODE_ENV === 'production') {
	optimization = {
		splitChunks: {
			cacheGroups: {
				commons: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all' },
			},
		},
		minimizer: [new OptimizeCSSAssetsPlugin()],
	};
}

module.exports = {
	entry: ['babel-polyfill', './src/main.js', './src/styles/main.scss'],
	// mode: 'development',
	output: {
		publicPath: '/',
	},
	module: {
		rules: [
			// js
			{ test: /\.js$/, use: ['babel-loader'], include: [path.resolve(__dirname, 'src')] },
			// sass
			{ test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
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
