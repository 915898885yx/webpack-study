const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


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
    mode: 'development',
    devServer: {
        // 构建项目后的路径
        contentBase: resolve(__dirname, "build"),
        // 监视contentBase 目录下的所有文件，一旦文件发生变化就会reload
        watchContentBase: true,
        watchOptions: {
            // 忽略文件
            ignored: /node_modules/
        },
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true,
        // 域名
        host: 'localhost',
        // 开启HMR
        hot: true,
        // 不要显示启动服务器日志信息
        clientLogLevel: 'none',
        // 除了一些基本信息以外，其他内容不要显示
        quiet: true,
        // 如果出错，不要全屏提示
        overlay: false,
        // 服务器代理 -- 解决开发环境的代理问题
        proxy: {
            '/api' {
                target: 'http://localhost:3000',
                // 发送请求时，请求路径重写：将/api/xxx --> /xxx(去掉/api)
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}