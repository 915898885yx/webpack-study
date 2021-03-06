const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
process.env.NODE_ENV = 'production' // 决定browerslist使用哪个环境

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, "build")
  },
  module: {
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // html压缩
      // minify: {
      //   // 去空格
      //   collapseWhitespace: true,
      //   // 去注释
      //   removeComments: true
      // }
    }),
    // 告诉webpack哪写库不参与打包，同时使用时的名称也得改变
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, "dll/manifest.json")
    }),
    // 将某个文件打包输出出去，并在html中自动引入该资源
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, "dll/jquery.js")
    })
  ],
  /**
   * 可以将node_modules中的代码单独打包一份chunk最终输出
   * 自动分析多入口的chunk中，有没有公共的文件。如果有会打包成单独的chunk。
   * 但入口也会把node_modules中的代码单独打包一份
   */
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  // production自动压缩js
  mode: 'development',
  externals: {
    // 拒绝jQuery包被打包进来
    jquery: 'jQuery'
  }
}