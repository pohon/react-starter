const path = require('path');
const merge = require('webpack-merge');
const CommonCfg = require('./__webpack/common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const ENTRY = './src/client/browser.jsx';
const OUTPUT = {
  path: path.resolve(__dirname, 'dist','public')
};

// common config stuff
const commonConfig = CommonCfg();

///////////// DEV CONFIG /////////////////
const getDevConfig = () => {
  const StylelintPlugin = require('stylelint-webpack-plugin');
  const devConfig = merge([
    {
      entry: ENTRY,
      output: Object.assign({
        filename: './js/bundle.dev.js'
      }, OUTPUT)
    },
    commonConfig.devServer({
      contentBase: OUTPUT.path
    }),
    commonConfig.modules(null, [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]),
    commonConfig.plugins([
      new webpack.LoaderOptionsPlugin({
        options: {
          eslint: {
            formatter: require('eslint-formatter-pretty')
          }
        }
      }),
      new StylelintPlugin({
        configFile: '.stylelintrc.json',
        syntax: 'scss'
      }),
      new HtmlWebpackPlugin({
        title: 'DEV',
        template: './__webpack/__template.html',
        filename:'index.html'
      })
    ])
  ]);
  devConfig.devtool = 'cheap-eval-source-map';
  return devConfig;
};

///////////// PRODUCTION CONFIG /////////////////

const getProductionConfig = () => {
  const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
  return merge([
    {
      entry: ENTRY,
      output: Object.assign({
        filename: './js/bundle.min.js'
      }, OUTPUT)
    },
    commonConfig.modules(),
    commonConfig.plugins([
      new OptimizeCSSAssetsPlugin(),
      new HtmlWebpackPlugin({
        title: 'PRODUCTION',
        template: './__webpack/__template.html',        
        filename:'index.html'
      })
    ])
  ]);
};

// webpack --env production|dev
module.exports = env => {
  if (env === 'production') {
    return getProductionConfig();
  }

  return getDevConfig();
};
