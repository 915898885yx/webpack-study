
const add = (x, y) => x + y

console.log(add(1, 2))

const promise = new Promise(resove => {
    setTimeout(() => {
        console.log('123')
    }, 100)
})