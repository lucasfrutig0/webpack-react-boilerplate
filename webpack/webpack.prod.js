const Webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.name': JSON.stringify('aloha-prod')
    }),
    new BundleAnalyzerPlugin(),
  ]
}