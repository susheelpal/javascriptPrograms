exports.checkPrimeNumber = (n) => {
    let arr = [];
    for (let i = 2; i < n; i++) {
        let count = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (!(count > 0))
            arr.push(i);
    }
    // console.log(arr.length)
    return arr;
}
// checkPrimeNumber(100);
/*checkPrimeNumberlength = (sNumber, eNumber) => {
    let arr = [];
    for (let i = sNumber; i < eNumber; i++) {
        let count = 0;
        for (let j = sNumber; j < i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (!(count > 0))
            arr.push(i);
    }
    console.log(arr.length)
    return arr.length;
}
// checkPrimeNumberlength(1, 100)*/