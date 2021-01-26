```javascript

PWA: 渐进式网络开发应用程序（离线可访问）
  workbox --> workbox-webpack-plugin

  new WorkboxWebpackPlugin.GenerateSW({
    /**
     * 1.帮助seriveWorker快速启动
     * 2.删除旧的serviceworker
     */
    clientsClaim: true,
    skipWaiting: true
  })

```
