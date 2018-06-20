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
	new CopyWebpackPlugin([
		{ from: './misc/.htaccess', to: '.' },
		{ from: './src/app.js', to: '.' },
		{ from: './src/sw.js', to: '.' },
	]),
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
		publicPath: process.env.ELECTRON ? './' : '/',
	},
	module: {
		rules: [
			// js
			{
				test: /\.js$/,
				use: [
					{ loader: 'babel-loader' },
					{ loader: 'ifdef-loader', options: { ELECTRON: process.env.ELECTRON } },
				],
				include: [path.resolve(__dirname, 'src')],
				exclude: ['src/sw.js'],
			},
			// sass
			{ test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
			// svg
			{ test: /\.svg$/, use: ['svg-react-loader'] },
			// 3D models
			{ test: /\.(obj|mtl|dae|fbx|gltf|glb)$/, use: ['file-loader'] },
			// images
			{ test: /\.(jpg|jpeg|png|gif)$/, use: ['file-loader'] },
			// font
			{ test: /\.(eot|woff|ttf)$/, use: ['file-loader'] },
			// video
			{ test: /\.mp4$/, use: ['file-loader'] },
		],
	},
	optimization,
	plugins,
	devServer: {
		host: '0.0.0.0',
		port: 3000,
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'dist'),
	},
};
