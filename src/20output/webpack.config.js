const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        // 文件名称（指定名称+目录）
        filename: '[name].js',
        // 输出文件目录（将来左右资源输出的公共目录）
        path: resolve(__dirname, "build"),
        // 所有资源引入的公共路径 --> path的前面（一般用于生产环境）
        publicPath: '/',
        chunkFilename: 'js/[name]_chunk.js', // 非入口chunk的名称
        //library: '[name]', // 全局整个库向外暴漏的变量名
        //libraryTarget: 'window', // 变量名添加到哪个上 浏览器
        //libraryTarget: 'global', // 变量名添加到哪个上 node
        //libraryTarget: 'commonjs', // 变量名添加到哪个上 
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}