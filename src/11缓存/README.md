## 缓存：

- babel 缓存
  - cacheDirectory: true,
  - 让第二次打包速度更快
- 文件资源缓存
  - hash:每次 webpack 打包构建时会生产的一个 hash 值；
    - 1.因为 js 和 css 使用同一个 hash，只改动一个文件，所有文件缓存失效
  - chunkhash： 根据 chunk 生成 hash 值，如果打包来源于同一个 chunk，那么 hash 值就会一样
    - 1.js 和 css 的 hash 还是一样的，因为 css 是在 js 种引入的，所以始于同一个 chunk
  - contenthash：根据文件内容生成的 hash，所以每个文件生成的 hash 值是不一样的
