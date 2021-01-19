1.首选需要安装webpack webpack-cli，基本包

通过webpack命令直接打包

p12

## webpack.config.js

```javascript
module.exports = {
    entry: "", // 入口文件,
    output: { // 出口文件
        filename: "", // 打包出的文件名称
        path: resolve(__dirname, "dist") // 打包输出的文件目录
    },
    module: {
        rules: [
            // 配置loader
            {
                test: /\.css$/,
                // 从后往前执行，使用css-loader将css文件转为js文件，
                // 使用style-loader在文件中创建style标签，将css代码写入
                use: ["style-loader", "css-loader"]
            }, {
                // 处理图片资源 background-image:url()
                // 但是无法处理html中img：src链接中的图片
                test: /\.(jpg|png|gif)$/,
                // 需要下载url-loader-->依赖，所以需要下载file-loader
                // 使用一个loader可以直接写
                loader: 'url-loader',
                options: {
                    // 图片大小小于8kb，就会被base64处理
                    // 优点：减少服务器请求，缓解服务器压力
                    // 缺点：图片体积变大（文件请求速度变慢）
                    limit: 8 * 1024,
                    // 问题：因为url-loader默认使用es6模块解析，html-loader使用commonjs
                    // 解析时会出问题：[object Module]
                    // 解决：关闭url-loader的es6模块化，使用commonjs解析
                    esModule: false,
                    // 给图片重命名
                    // [hash:10]取hash的前十位
                    // [ext]文件的原扩展名
                    name: '[hash:10].[ext]',
                    // 输出目录
                    outputPath: 'imgs'
                }
            }, {
                test: /\.html$/,
                // 处理html文件img的图片（负责引用img，从而能被url-loader解析）
                loader: 'html-loader'
            }, {
                // 其他资源的处理
                // 排除html、css、js以外的资源
                exclude: /\.(css|js|html|less)/,
                loader: 'file-loader',
                options: {
                    name: [hash:10].[ext],
                    // 输出目录
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [
        // html-webpack-plugin 如果没有模板，自动创建一个html文件，
        // 将output文件目录通过script标签引入
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "src"),
            filename: "index.html"
        })
    ],
    // 模式 production/development
    mode: 'development',
    
    /*
    	开发服务器devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
    	特点：只会在内存中编译打包，不会有任何输出
    	启动devServer指令：npx webpack-dev-server
    */
    devServer: {
        // 项目构建后路径
        content: resolve(__dirname, 'build'),
        // 自动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true
    }
}
```

