/******************************************************************************
 *  Execution       :   1. default node         cmd> node bubbleSortMain.js
 *                      2. if nodemon installed cmd> nodemon bubbleSortMain.js
 *
 *  Purpose         : Sort the given array using bubble sort.
 *
 *  @description
 *
 *  @file           : ticTacToeMain.js
 *  @overview       : take a X or O as a input and play till win or lose. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 24-12-2019
 ******************************************************************************/
let callFunction = require('./bubbleSortBL');
let read = require('readline-sync');
let arr = [];
let length = read.questionInt('enter the array length');
callFunction.insertElement(arr, length);
let sortedArray = callFunction.bubbleSort(arr, length);
console.log(arr);