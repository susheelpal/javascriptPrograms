/******************************************************************************
 *  Execution       :   1. default node         cmd> node factorMain.js
 *                      2. if nodemon installed cmd> nodemon factorMain.js
 *
 *  Purpose         : Print a prime factor of given number
 *
 *  @description
 *
 *  @file           : factorMain.js
 *  @overview       : read how many times want to flip from console and print percentage of both faces.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 ******************************************************************************/
let read=require('readline-sync');
let callFunction=require('./factorBL');

let number=read.question('enter the number :');
callFunction.primeFactor(number);