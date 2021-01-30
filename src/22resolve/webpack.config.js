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
    resolve: {
        // 配置解析模块路径别名：优点：简写路径  确定：路径没有提示
        alias: {
            $css: resolve(__dirname, "src")
        },
        // 配置省略文件路径的后缀名
        extensions: ['.js', '.json', '.css'],
        // 告诉wenpack 解析模块是去哪个目录找
        modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
    }
}