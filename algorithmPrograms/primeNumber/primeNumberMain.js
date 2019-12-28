/******************************************************************************
 *  Execution       :   1. default node         cmd> node primeNumberMain.js
 *                      2. if nodemon installed cmd> nodemon primeNumberMain.js
 *
 *  Purpose         : find Prime Number
 *
 *  @description    : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range and
 *                    also find the palindrome among them.
 *
 *  @file           : primeNumberMain.js
 *  @overview       : find the prime number of given range.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 24-12-2019
 ******************************************************************************/

let callFunction = require('./primeNumberBL');
let read = require('readline-sync');
try {
    let input = callFunction.display(1000);
    console.log(input);
    let result2 = [];
    for (let i = 0; i < input.length; i++) {
        if (callFunction.checkPalindrome(input[i])) {
            result2.push(input[i]);
        }
    }
    console.log(result2);
}
catch (err) {
    console.log(err);
}
