let call = require('../../utility/checkPrimeNumber');
/*exports.primeNumbers = (n) => {

    let arr = new Array();
    for (i = 0; i < n/100; i++) {
        arr[i] = new Array();
        for (j = 0; j < columns; j++) {
            arr[i][j] = ;
        }
    }
    console.log(arr);
}*/
let filtered = count.filter((element) => {
    if (element != null) {
        return element;
    }
});

exports.prime = (n) => {
    let arr = call.checkPrimeNumber(n);
    return arr;
}