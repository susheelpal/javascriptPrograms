let call = require('../../utility/checkPrimeNumber');
exports.primeNumbers = (n) => {

    let arr = new Array();
    let pnumbers=this.prime(n);
    for (let i = 0; i < n / 100; i++) {
        arr[i] = new Array();
        let startIndex=i*100;
        let endIndex=(i+1)*100;
        for (let j = startIndex; j < endIndex; j++) {

            arr[i] = pnumbers.filter((element)=> {
                if (element>startIndex && element < endIndex ) {
                    return element;
                }
            });
        }
    }
    return arr;
}
exports.prime = (n) => {
    let arr = call.checkPrimeNumber(n);
    return arr;
}
