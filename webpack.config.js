const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: ["webpack-hot-middleware/client", "./client/index.js"],
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist/bundle"),
		publicPath: "/static/",
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				// exclude: /node_modules/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					{
						loader: "resolve-url-loader",
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
							// sourceMapContents: false,
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				exclude: /node_modules/,
				type: "asset/resource",
			},
		],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};
