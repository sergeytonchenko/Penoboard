const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },    
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/pug/index.pug',
          filename: 'index.html'
          
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyWebpackPlugin({
          patterns: [
            { from: './src/img', to: './img' },
            { from: './src/fonts', to: './fonts' },            
          ]
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),        
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              }, {
                loader: 'postcss-loader',
                options: { sourceMap: true, config: { path: 'src/postcss.config.js' } }
              }
            ]
          },
          { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              }, 
              {
                loader: 'postcss-loader',
                options: { sourceMap: true, config: { path: 'src/postcss.config.js' } }
              },
              {
                loader: 'resolve-url-loader',
                options: { sourceMap: true }                
              }, 
              {
                loader: 'sass-loader',
                options: { sourceMap: true }
              },               
            ]
          },
          {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          },          
          {
            test: /\.(png|jpg|gif|svg)$/,            
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',                                                      
            },
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }           
        ],
      },
}