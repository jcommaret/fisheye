const path = require('path');
const dev = process.env.NODE_ENV === "dev";
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

let config = {
  entry : "./assets/app.js",
  watch : dev,
  output : {
    path : path.resolve("./dist"),
    filename : "bundle.js",
    publicPath: "/dist/",
  },
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
  plugins:[],
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