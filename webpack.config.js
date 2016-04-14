'use strict'
const path = require('path')
const WebpackErrorNotificationPlugin = require('webpack-error-notification')

const DEV_SERVER_PORT = 7777

module.exports = {
  cache: true,

  debug: true,

  devtool: 'source-map',

  entry: {
    index: './src/index.jsx'
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|es6)$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules,localIdentName=[local]',
          'sass'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|eot|woff|ttf|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'file' // Could use url loader for inline serialisation
        // loader: 'url?limit=25000' // please be careful when changing this value. Some CSS may rely on this!
      }
    ]
  },
  plugins: [
    new WebpackErrorNotificationPlugin()
  ],

  resolve: {
    root: path.join(__dirname),
    extensions: ['', '.js', '.jsx', '.es6']
  },

  output: {
    publicPath: `//localhost:${DEV_SERVER_PORT}/`,
    filename: '[name].js'
  },

  devServer: {
    port: DEV_SERVER_PORT,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
}
