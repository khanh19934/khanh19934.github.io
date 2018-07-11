const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
      './src/index.js'
    ],
    mode: 'production',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.scss$/, use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader','sass-loader'],
              publicPath: '/'
            })
            
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin({
          filename: "styles.css",
          disable: false,
          allChunks: true
        }),
      ],
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: path.join(__dirname),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.join(__dirname)
    }
  };