const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build")
    },
    module: {
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            // html压缩
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        })
    ],
    // production环境下自动压缩，production自动引入了很多插件
    mode: "development"
}