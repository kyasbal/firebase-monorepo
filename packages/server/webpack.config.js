const path = require("path");
const webpack = require("webpack");

module.exports = {
  target: 'node',
  entry: {
    api: './src/api/api.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].js',
    libraryTarget: 'commonjs2'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.ts']
  }
}
