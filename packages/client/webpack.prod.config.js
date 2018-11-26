const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.config");
const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const prodSpecific = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        extractComments: true
      }),
      new OptimizeCssAssetsPlugin()
    ]
  },
    plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new MiniCssExtractPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              sass: true,
              namedExport: true,
              camelCase: true,
              localIdentName: '[hash:base64:4]'
            }
          },
          {
            loader:"postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};
module.exports = merge(common, prodSpecific);
