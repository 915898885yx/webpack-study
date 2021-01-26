/**
    使用dll技术，对某个库（第三方：jquery，react，vue）进行单独打包
 */
const { resolve } = require('path')
const webpack = require('webpack')
module.exports = {
    entry: {
        // 最终打包生成的[name] --> jquery
        // ['jquery] --> 要打包的库是jquery
        jquery: ['jQuery']
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, "dll"),
        library: '[name]_[hash]', // 打包的库里面向外暴漏出去的内容的名字
    },
    plugins: [
        // 打包生成一个manifest.json --> 提供和juqery映射
        new webpack.DllPlugin({
            name: '[name]_[hash]', // 映射库的暴漏的内容名称
            path: resolve(__dirname, "dll/manifest.json"), // 输出文件路径
        })
    ],
    mode: 'production'
}