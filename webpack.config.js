const path = require("path");
const webpack = require("webpack");

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
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
