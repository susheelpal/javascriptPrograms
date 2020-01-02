let read = require('readline-sync');
// let util = require('../../utility/checkPrimeNumber');
let callFunction = require('./primeNumberBL');

let number = read.question('enter the number :');
// let result = callFunction.prime(number);
let result = callFunction.primeNumbers(number);
console.log(result);
