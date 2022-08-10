const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  entry: {
    homepage : [paths.src + '/index.js'],
    photographer: [paths.src + '/photographer.js'],
  },
  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Fisheye',
      logo: paths.src + '/images/images/logo.png',
      favicon: paths.src + '/images/icons/favicon.png',
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Fisheye - Nos Photographes',
      favicon: paths.src + '/images/icons/favicon.png',
      template: paths.src + '/photographer.html', // template file
      filename: 'photographer.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
      { test: /\.json$/, type: 'json' },
      {
        test: /\.(mp4)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
