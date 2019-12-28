/******************************************************************************
 *  Execution       :   1. default node         cmd> node mergeSortMain.js
 *                      2. if nodemon installed cmd> nodemon mergeSortMain.js
 *
 *  Purpose         : Merge Sort.
 *
 *  @description
 *
 *  @file           : mergeSortMain.js
 *  @overview       : sorting the given array using array. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 24-12-2019
 ******************************************************************************/

let readline = require('readline-sync');
let callFunction = require('./mergeSortBL');
try {
    const sample = readline.question('enter the strings to be sorted ')
    let unsortedArr = sample.split(' '); //split the given sentence into array of words
    console.log('The sorted array is ')
    console.log(callFunction.doMergeSort(unsortedArr))
} catch (err) {
    console.log(err);
}