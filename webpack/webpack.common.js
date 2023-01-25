/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/main.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /].(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {presets: ['@babel/env']},
      },
      {
        test: /\.tsx?$/,
        include: path.src,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },

      // Images: Copy image files to build folder
      {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

      // Fonts and SVGs: Inline files
      {test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline'},
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Webpack - Base Project',
      // favicon: path.src + '/assets/icons/favicon.png',
      filename: 'index.html', // output file
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
            from: __dirname + '/src/assets',
            to: 'assets',
            noErrorOnMissing: true
        }
    ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),

    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx', 'mjs'],
    }),
  ],
  // stats: 'errors-only',
}