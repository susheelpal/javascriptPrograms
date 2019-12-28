/******************************************************************************
 *  Execution       :   1. default node         cmd> node factorMain.js
 *                      2. if nodemon installed cmd> nodemon factorMain.js
 *
 *  Purpose         : Print a prime factor of given number
 *
 *  @description    : Computes the prime factorization of N using brute force.
 *
 *  @file           : factorMain.js
 *  @overview       : read number and print prime factors.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 ******************************************************************************/

let read = require('readline-sync');
let callFunction = require('./factorBL');
try {
    let number = read.question('enter the number :');
    callFunction.primeFactor(number);
} catch (err) {
    console.log(err);
}
