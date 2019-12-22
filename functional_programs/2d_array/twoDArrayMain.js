/******************************************************************************
 *  Execution       :   1. default node         cmd> node twoDArrayMain.js
 *                      2. if nodemon installed cmd> nodemon twoDArrayMain.js
 *
 *  Purpose         : Print 2-d array of given rows and columns
 *
 *  @description
 *
 *  @file           : twoDArrayMain.js
 *  @overview       : read rows and columns and print array.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 ******************************************************************************/
let read=require('readline-sync');
let callFunction=require('./twoDArrayBL');

let rows=read.question('enter number of rows :');
let columns=read.question('enter number of columns :');

callFunction.myArray(rows,columns);