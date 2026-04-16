const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: true,
  }),
]