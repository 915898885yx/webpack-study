/**
 * source-map：一种提供源代码到构建后代码的映射技术
 * devtool: 'source-map'
 * [inline-|hidden-|eval-][nosource-][cheap-[module-]]source-map
 * source-map:外部
 *    --错误代码准确信息和源代码的错误位置
 * inline-source-map: 内联
 *  1.只生成一个内联的source-map
 *    --错误代码准确信息和源代码的错误位置
 * hidden-source-map: 外部
 *    --错误代码错误原因，但是没有错误位置，不能追踪源代码错误，只能提示到构建后代码的错误位置
 * eval-source-map: 内联
 *  每个文件都生成对应的source-map，都在eval
 *    --错误代码准确信息和源代码的错误位置
 * nosource-source-map: 外部
 *    --错误代码错误原因，但是没有错误位置
 * cheap-source-map: 外部
 *    --错误代码准确信息和源代码的错误位置、但是只能精确到行
 * cheap-module-source-map:外部
 *    --错误代码准确信息和源代码的错误位置
 *      module会将loader的source-map加入
 * 内联和外部的区别：
 *  1.外部生成了文件，内联没有
 *  2.内联构建速度更快
 * 
 * 
 * 开发环境：速度快，调试更友好
 *    速度快(eval > inline > cheap > ...)
 *      eval-cheap-source-map
 *      eval-source-map
 *    调试友好
 *      source-map
 *      cheap-module-source-map
 *      cheap-source-map
 *   --综合 eval-source-map / eval-cheap-module-source-map
 * 生产环境：代码要不要隐藏、调试要不要友好
 *    内联让代码体积变大，所以再生产不用内联
 *    nosource-source-map 全部隐藏
 *    hidden-source-map 只隐藏源代码，会提示构建后的代码错误信息
 *    --> source-map / cheap-module-source-map
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
  },
  devtool: 'source-map'
}