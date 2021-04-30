const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    hot: true,
  },
  output: {
    filename: "app.min.js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new CopyWebpackPlugin({ patterns: [{ from: "public" }] })],
  module: {
    rules: [
      {
        test: /.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
