//example of callback
add = (a, b) => {
    console.log(`addition ${a + b}`)
}

function fun1(a, b, callback) {
    console.log('we are doing addition')
    callback(a, b);
}
fun1(10, 20, add);