const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "index.ts"),
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "app.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader"}],
  },
  mode:"production",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
  ],
  watch:true,
};