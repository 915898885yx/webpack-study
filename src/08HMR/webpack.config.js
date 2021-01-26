/**
 * HMR: hot module replacement 热模块替换
 * 作用： 一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块）
 *    极大的提升了构建速度
 * 样式文件：可以使用HMR功能：因为style-loader内部实现了
 * 
 * js文件：默认不能使用HMR功能-->需要修改js代码，添加支持HMR功能(look index.js)
 *   //注意：主要针对非入口文件做处理
 * html文件：默认不能使用HMR功能，同时导致html文件不能热更新(不用做HMR功能，因为HTML只有一个，要变肯定全部都要变)
 *    解决：entry入口加上html文件
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
module.exports = {
  entry: [
    "./src/js/index.js"
  ],
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, "build"),
    port: 3000,
    compress: true,
    open: true,
    hot: true
  }
}