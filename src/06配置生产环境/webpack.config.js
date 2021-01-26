const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取单独的css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin') // Css压缩
const HtmlWebpackPlugin = require('html-webpack-plugin')
process.env.NODE_ENV = 'production' // 决定browerslist使用哪个环境

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 需要在package.json中配置browerslist， 默认使用生产环境配置process.env.NODE_ENV
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        require('postcss-preset-env')()
      ]
    }
  }
]
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...commonCssLoader]
      },
      {
        test: /\.less$/,
        use: [
          ...commonCssLoader,
          'less-loader'
        ]
      },
      /**
       * 正常来讲，一个文件只能被一个loader处理，
       * 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序
       *  先执行eslint 再执行babel
       */
      {
        // 在package.json中eslintConfig --> airbnb规则
        test: /\.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true // 自动修复
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {
                  version: 3
                },
                targets: {
                  chrome: '60'
                }
              }
            ]
          ]
        }
      }, {
        test: /\.(jpg|png|gif)/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
          esModule: false
        }
      }, {
        // 处理html中的图片路径的解析问题
        // 需要关闭url-loader中的esModule的配置
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        exclude: /\.(js|css|less|html|jpg|png|gif)/, // 排除这些文件
        loader: 'file-loader',
        options: {
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // html压缩
      minify: {
        // 去空格
        collapseWhitespace: true,
        // 去注释
        removeComments: true
      }
    })
  ],
  // production自动压缩js
  mode: 'production'
}