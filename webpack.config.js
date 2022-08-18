const path = require('path');
const dev = process.env.NODE_ENV === "dev";
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let config = {
  entry : {
    home : "./js/app.js",
    photographers : "./js/pages/photographer.js",
  },
  output : {
    clean : true,
    path : path.resolve(__dirname, 'dist'),
    filename : "[name].bundle.js"
  },
  watch : dev,
  mode:"development",
  devtool: "eval-cheap-module-source-map",
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
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.json$/,
        type: 'asset',
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
            ],
          },
        },
      }),
    ],
  },
}
 
module.exports = config