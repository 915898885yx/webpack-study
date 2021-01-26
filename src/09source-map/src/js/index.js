import "../css/index.css"
import print from "./print"
function add(x, y) {
    return x + y
}
print()
console.log(add(1, 6))
// 一旦module.hot为true，表示开启了HMR功能
if (module.hot) {
    // 监听print.js文件，一旦发生改变，就执行回调函数
    module.hot.accept("./print.js", function () {
        print()
    })
}