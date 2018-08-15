const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: "app.bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new CopyWebpackPlugin([
      { from:'src/assets', to: 'images' }
    ]),
    new ExtractTextPlugin('style.bundle.css')
  ],

  module : {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({use: 'css-loader',}), exclude: /node_modules/ },
      { test: /\.sass$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|gif|jpeg)$/, loader: 'file-loader', exclude: /node_modules/},
    ]
  },

  devServer: {
    contentBase: paths.SRC
  }
};