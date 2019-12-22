/******************************************************************************
 *  Execution       :   1. default node         cmd> node harmonicNumberMain.js
 *                      2. if nodemon installed cmd> nodemon harmonicNumberMain.js
 *
 *  Purpose         : Print a message with username
 *
 *  @description
 *
 *  @file           : harmonicNumberMain.js
 *  @overview       : read how many times want to flip from console and print percentage of both faces.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 21-12-2019
 *
 ******************************************************************************/
let read=require('readline-sync');
let callFunction=require('./harmonicNumberBL');

let n=read.question('enter the number :');
callFunction.harmonicNumber(n);