//example of async and await
function add(a, b) {
    return a + b
}

async function fun1(a, b) {
    console.log("additon");
    let result = await add(a, b)
    console.log(result);

}
fun1(10, 20, add);