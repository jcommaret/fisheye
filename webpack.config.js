const path = require('path');
const dev = process.env.NODE_ENV === "dev";

let config = {
  entry : "./assets/app.js",
  watch : dev,
  output : {
    path : path.resolve("./dist"),
    filename : "bundle.js",
    publicPath: "/dist/",
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ['style-loader','css-loader','sass-loader'],
      },
    ]
  },
  plugins:[]
}
 
module.exports = config