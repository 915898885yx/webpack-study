const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        // 处理css文件
        test: /\.css$/,
        // 从后往前执行，使用css-loader将css文件转为js文件，使用style-loader在文件中创建style标签，将css代码写入
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // 插件
    // html-webpack-plugin 如果没有模板，自动创建一个html文件，将output文件目录通过script标签引入
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src", "index.html"),
      filename: "index.html"
    })
  ],
  mode: 'development'
}