const path = require('path');
const dev = process.env.NODE_ENV === "dev";
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

let config = smp.wrap({
  mode:"development",
  watch : dev,
  devtool: "cheap-module-source-map",
  cache: {
    type: 'filesystem',
  },
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
      },
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new ProgressBarPlugin({
      format: `:msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
    }),
    new ErrorOverlayPlugin(),
  ],
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
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
})
 

module.exports = config