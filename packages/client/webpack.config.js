const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: ["@babel/polyfill", "./src/index.tsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  plugins: [
    new HtmlPlugin({
      filename: "index.html",
      template: "template/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"]
  }
};
