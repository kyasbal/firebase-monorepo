const webpack = require("webpack");
const common = require("./webpack.config");
const merge = require("webpack-merge");
const devSpecific = {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              sass: true,
              namedExport: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};
module.exports = merge(common, devSpecific)
