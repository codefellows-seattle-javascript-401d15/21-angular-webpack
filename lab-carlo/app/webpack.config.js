'use strict';

const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/entry.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  plugins: [
    new HTMLPlugin({ template: `${__dirname}/index.html` })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
