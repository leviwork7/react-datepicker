const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require('webpack')

const postcssConfig = {
  loader: require.resolve('postcss-loader'),
  options: {
    postcssOptions: {
      ident: 'postcss',
      config: false,
      plugins: [
        'autoprefixer',
        [
          'postcss-preset-env',
          {
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          },
        ],
        'postcss-normalize',
      ]
    },
  },
}

module.exports = function(webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  return {
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'bundle.css',
        chunkFilename: '[id].css'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'React DatePicker',
        template: path.resolve(__dirname, 'src', 'index.html'),
      })
    ],
    entry: path.resolve(__dirname, 'src', './index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
    },
    devServer: {
      open: true,
      port: 9000,
      historyApiFallback: true,
      hot: true,
      compress: true,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'public'),
          ],
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  modules: false,
                  loose: true
                }],
                '@babel/preset-react'
              ]
            }
          }]
        },
        {

        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            postcssConfig,
          ]
        },
      ]
    }
  }
}
