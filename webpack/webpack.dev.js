/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
    new ReactRefreshWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        configOverwrite: {
          exclude: ["node_modules", "**/*.spec.ts", "**/*.test.ts"],
          compilerOptions: {
            noUnusedLocals: false,
            noUnusedParameters: false
          }
        }
      }
    })
  ]
}