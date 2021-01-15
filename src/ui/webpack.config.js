const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _p = require('path');
const path = process.cwd();
const outputPath = './../app/assets';

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'stylesheets/ui.css'
    })
  ],
  entry: './src/index.js',
  output: {
    filename: 'javascripts/ui.js',
    path: _p.resolve(path, outputPath)
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  }
}
