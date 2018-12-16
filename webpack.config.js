const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 9111
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin([
      { from:'./src/images', to:'images' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
