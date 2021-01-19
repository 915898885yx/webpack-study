使用插件 mini-css-extract-plugin 打包时将 css 文件单独剔除
处理 css 的 loader 中，不使用 style-loader 使用 MiniCssExtractPlugin.loader 代替 style-loader

css 兼容性处理：postcss --> postcss-loader postcss-preset-env
帮助 postcss 找到 package.json 中的 browserslist 里面的配置，通过配置加载指定的 css 兼容样式
development\production 是 nodejs 的环境变量 process.env.NODE_ENV = "development"
"browserslist": {
"development": [
"last 1 chrome version",
"last 1 firefix version",
"last 1 safari version"
],
"production": [
">0.2%",
"not dead",
"not op_mini all"
]
}
