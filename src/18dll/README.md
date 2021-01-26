```javascript

使用dll技术，对某个库（第三方：jquery，react，vue）进行单独打包
 当运行webpack时，默认查找webpack.config.js 配置文件
  需求：需要运行webpack.dll.js 文件
  webpack --config webpack.dll.js

  //webpack.dll.js
  new webpack.DllPlugin({
      name: '[name]_[hash]', // 映射库的暴漏的内容名称
      path: resolve(__dirname, "dll/manifest.json"), // 输出文件路径
  })
  // webpack.config.js
  // 告诉webpack哪写库不参与打包，同时使用时的名称也得改变
  new webpack.DllReferencePlugin({
    manifest: resolve(__dirname, "dll/manifest.json")
  }),

  // 将某个文件打包输出出去，并在html中自动引入该资源
  new AddAssetHtmlWebpackPlugin({
    filepath: resolve(__dirname, "dll/jquery.js")
  })
```
