const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            /**
             * js兼容性处理：babel-loader @babel/preset-env @babel/core
             * 1.基本的兼容性处理 -- @babel/preset-env
             *   q:只能转换基本语法，promise无法转换
             * 2.全部的js兼容性处理 --> @babel/polyfill
             *   q:指向解决部分兼容性问题，但是将所有的代码全部引入，体积太大
             * 3.需要做兼容性处理：按需加载 --> core-js
             */
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                // 按需加载
                                useBuiltIns: 'usage',
                                // 指定core-js版本
                                corejs: {
                                    version: 3
                                },
                                // 指定兼容性做到哪个版本浏览器
                                targets: {
                                    chrome: '60',
                                    firefox: '60',
                                    ie: '9',
                                    safari: '10',
                                    edge: '17'
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development"
}