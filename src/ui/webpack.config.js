const _p = require('path');
const path = process.cwd();
const outputPath = './../app/assets/javascripts';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'ui.js',
    path: _p.resolve(path, outputPath)
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      test: /\.css$/i,
      use: ["css-loader"]
    }]
  }
}
