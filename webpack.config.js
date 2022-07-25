const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // Point d'entée
  entry: {
    home: path.resolve(__dirname, './src/home.js'),
    photographers: path.resolve(__dirname, './src/photographers.js'),
  },
  output:{
    path : path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
    clean:true
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fisheye',
      template: path.resolve(__dirname, './src/home.html'), // template file
      filename: 'home.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Fisheye',
      navTitle:'Nos Photographes',
      template: path.resolve(__dirname, './src/photographers.html'), // template file
      filename: 'photographers.html', // output file
    }),
    new CleanWebpackPlugin(),
  ],

  // modules
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'assets',
      },
    ],
  },
};
