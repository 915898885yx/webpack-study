const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
process.env.NODE_ENV = 'production' // 决定browerslist使用哪个环境

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, "build")
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // html压缩
      minify: {
        // 去空格
        collapseWhitespace: true,
        // 去注释
        removeComments: true
      }
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      /**
       * 1.帮助seriveWorker快速启动
       * 2.删除旧的serviceworker
       */
      clientsClaim: true,
      skipWaiting: true
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
  mode: 'production'
}