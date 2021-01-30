const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'production',
    optimization: { // 针对生产环境
        splitChunks: {
            chunks: 'all',
            // 以下均为默认值，可以不写
            minSize: 30 * 1024, // 分割的chunk最小为30KB
            maxSize: 0, // 最大不限制
            minChunks: 1, // 要提取的chunks最少被引用一次
            maxAsyncRequests: 5, // 按需加载时并行加载的文件最大数量
            maxInitialRequests: 3, // 入口js文件最大并行请求数量
            automaticNameDelimiter: '~', // 名称连接符
            name: true, // 可以使用命名规则
            cacheGroups: { // 分割chunk的组
                // node_modules 文件会被打包到vendors 组的chunk中 -- vendors.XX.js
                // 满足上面的公共规则，如大小要超过30kb，至少引用一次
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    // 打包优先级
                    priority: -10
                },
                default: {
                    // 要提取的chunk最少被引用两次
                    minChunks: 2,
                    // 优先级
                    priority: -20,
                    // 如果当前要打包的模块，和之前已经被提取的模块时同一个，就会复用而不是重新打包
                    reuseExistingChunk: true
                }
            }
        },
        // 将当前模块的记录其他模块的hash单独打包为一个文件runtime
        // 解决：修改a文件导致b文件的contenthash变化
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`
        },
        minimizer: [
            // 配置生产环境的压缩方案：js和css  webpack 4.26以上版本使用terser做的压缩
            new TerserWebpackPlugin({
                // 开启缓存
                cache: true,
                // 开启多进程打包
                parallel: true,
                // 启用sourece-map
                soureceMap: true
            })
        ]
    }
}