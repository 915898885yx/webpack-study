## tree shaking：去除无用的代码

- 前提：
  - 1.必须使用 ES 模块化
  - 2.开发 production 环境（webpack 的）
    会将 js 种 export 出的方法，但是没有被使用的，不被打包，减少打包体积
- 在 package.json 种配置
  "sideEffects":false 所有的代码都没有副作用（都可以进行 tree shaking）
  问题： 可能会把 css / @babel/polyfill (副作用)文件干掉
  所以配置："sideEffects": ["*.css", "*.less"] 把 css 标记为不进行 tree shaking
