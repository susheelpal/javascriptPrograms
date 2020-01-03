
/******************************************************************************
 *  Execution       :   1. default node         cmd> node primeNumberMain.js
 *                      2. if nodemon installed cmd> nodemon primeNumberMain.js
 *
 *  Purpose         : balance parenthesis.
 *
 *  @description    : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store the prime numbers 
 *                    in a 2D Array, the first dimension represents the range 0-100, 100-200, and so on. While the second 
 *                    dimension represents the prime numbers in that range.
 *
 *  @file           : primeNumberMain.js
 *  @overview       : to check prime number in given range.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-01-2020
 ******************************************************************************/

let read = require('readline-sync');
let callFunction = require('./primeNumberBL');
try {
    let number = read.question('enter the number :');
    let result = callFunction.primeNumbers(number);
    console.log(result);
} catch (err) {
    console.log(err)
}
