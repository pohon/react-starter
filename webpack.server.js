const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const PublicPath = path.resolve('dist','public');

module.exports = {
  target:'node',
  entry:path.resolve(__dirname,'./src/server/index.jsx'),
  output:{
    filename:'server.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/.jsx?$/,
        loader: 'babel-loader',
        exclude:/node_modules/
      }
    ]
  },
  plugins:[  
    new webpack.ProvidePlugin({
      'React':'react'
    }),      
    new CleanPlugin([ 'dist/server.js'])
  ]
};