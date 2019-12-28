/******************************************************************************
 *  Execution       :   1. default node         cmd> node insertSortMain.js
 *                      2. if nodemon installed cmd> nodemon insertSortMain.js
 *
 *  Purpose         : Sort the array using insertion sort.
 *
 *  @description    : Reads in strings and prints them in sorted order using insertion sort.
 *
 *  @file           : insertSortMain.js
 *  @overview       : take the array and sort the array using insertion sort. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 24-12-2019
 ******************************************************************************/

let callFunction = require('./insertSortBl');
let read = require('readline-sync');

try {
    let arr = [];
    let length = read.questionInt('enter the array length :');
    callFunction.insertElement(arr, length);
    let sortedArray = callFunction.insertionSort(arr, length);
    console.log(`sorted array is :${arr}`);
} catch (err) {
    console.log(err);
}
