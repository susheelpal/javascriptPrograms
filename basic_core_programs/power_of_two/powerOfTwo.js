/******************************************************************************
 *  Execution       :   1. default node         cmd> node powerOfTwo.js
 *                      2. if nodemon installed cmd> nodemon powerOfTwo.js
 *
 *  Purpose         : Print a power of 2
 *
 *  @description    : This program takes a command-line argument N and prints a table of the powers of 2 that are less than or equal to 2^N.
 *
 *  @file           : powerOfTwo.js
 *  @overview       : read how many times want to flip from console and print percentage of both faces.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 21-12-2019
 *
 ******************************************************************************/

let read = require('readline-sync');
let callFunction = require('./powerOfTwoBL');
try {
    let varArg = process.argv.slice(2);
    callFunction.findPower(varArg);
} catch (err) {
    console.log(err);
}
