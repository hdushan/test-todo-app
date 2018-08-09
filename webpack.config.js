const webpack = require('webpack');

const API_HOST = process.env.API_HOST || 'http://localhost:4000'

module.exports = {

  entry: './public/src/main.js',
  output: {
    filename: './public/build/bundle.js'
  },
  resolve: {

    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_HOST': JSON.stringify(API_HOST)
    })
  ],
  devServer: {
    port: 3000
  }
}
