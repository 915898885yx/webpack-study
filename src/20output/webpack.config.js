const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        // 文件名称（指定名称+目录）
        filename: '[name].js',
        // 输出文件目录（奖励啊）
        path: resolve(__dirname, "build")
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}