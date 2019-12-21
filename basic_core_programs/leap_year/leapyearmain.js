/******************************************************************************
 *  Execution       :   1. default node         cmd> node leapyearmain.js
 *                      2. if nodemon installed cmd> nodemon leapyearmain.js
 *
 *  Purpose         : Print a message with username
 *
 *  @description
 *
 *  @file           : leapyearmain.js
 *  @overview       : read how many times want to flip from console and print percentage of both faces.
 *  @module         : leapyearmain - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 21-12-2019
 *
 ******************************************************************************/
let read = require('readline-sync');
let callfun = require('./leapyearBL');

let number = read.question('enter year in 4 digit :');
callfun.checkYear(number);