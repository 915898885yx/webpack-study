# webpack 性能优化

- 开发环境性能优化
- 生产环境性能优化

## 开发环境性能优化

- 优化打包速度
  - HMR
- 优化代码调试
  - source-map

## 生产环境性能优化

- 优化打包构建速度
  - oneOf
  - babel 缓存
  - 多进程打包(消耗时间比较长的任务)
  - externals
  - dll
- 优化代码运行的性能
  - 缓存(hash-chunkhash-contenthash)
  - tree shaking(es6 + pruduction 会自动开启插件)
  - code split
  - 懒加载/预加载(兼容性严重)
  - pwa(兼容性严重)
