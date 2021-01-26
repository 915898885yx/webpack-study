// import {
//     mul
// } from "./test"
document.getElementById('btn').onclick = function () {
    // 这样就懒加载了
    // 预加载：webpackPrefetch：会在使用前，提前加载js文件
    // ---正常加载可以认为是并行加载（同一时间加载多个文件），预加载：等其他资源加载完毕，浏览器空闲了在偷偷加载资源
    import(/* webpackChunkName: 'test', webpackPrefetch: true */"./test").then(({ mul }) => {
        console.log(mul(1, 2))
    })
}