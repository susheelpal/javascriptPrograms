/******************************************************************************
 *  Execution       :   1. default node         cmd> node flipcoinmain.js
 *                      2. if nodemon installed cmd> nodemon flipcoinmain.js
 *
 *  Purpose         : Print a percentage of flipped coin
 *
 *  @description    : Flip Coin and print percentage of Heads and Tails
 *
 *  @file           : flipcoinmain.js
 *  @overview       : read how many times want to flip from console and print percentage of both faces.
 *  @module         : flipcoinmain - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 21-12-2019
 *
 ******************************************************************************/

let read = require('readline-sync');
let callfunction = require('./flipcoinBL');

try {
    let number = read.question('how many times you want to flip :');
    callfunction.flippedCoinCount(number);
} catch (err) {
    console.log(err);
}
