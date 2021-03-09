const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./js/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
