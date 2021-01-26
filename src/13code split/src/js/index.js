
function add() {
    
}

/**
 * 以下代码将test文件单独打包
 */
import(/* webpackChunkName: 'test' */"./test").then(res => {
    console.log('文件加载成功')
}).catch(() => {
    console.log('文件加载失败')
})