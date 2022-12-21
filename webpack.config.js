const path = require('path')
const dev = process.env.NODE_ENV === "dev"
const ESLintPlugin = require('eslint-webpack-plugin')

let config = {
  mode:"development",
  watch : dev,
  devtool: "cheap-module-source-map",
  entry : {
    home : "./js/app.js",
    photographers : "./js/pages/photographer.js",
  },
  output : {
    clean : true,
    path : path.resolve(__dirname, 'dist'),
    filename : "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheCompression: false,
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ['style-loader','css-loader','sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(mp4)$/i,
        type: "asset",
      },
      {
        test: /\.json$/,
        type: 'asset',
      }
    ]
  },
  plugins:[
    new ESLintPlugin()
  ],
}

module.exports = config