/******************************************************************************
 *  Execution       :   1. default node         cmd> node sumOfTripletMain.js
 *                      2. if nodemon installed cmd> nodemon sumOfTripletMain.js
 *
 *  Purpose         : Print sum of triplet which result is 0
 *
 *  @description    : A program with cubic running time. Read in N integers and counts the   number of triples that sum to exactly 0.
 *
 *  @file           : sumOfTripletMain.js
 *  @overview       : create array and read element and find sum of triplet which result 0.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 ******************************************************************************/

let read = require('readline-sync');
let callFunction = require('./sumOfTripletBL');

try {
    let arrayLength = read.question('enter the length of array :');
    let arr = [];
    for (i = 0; i < arrayLength; i++) {
        arr[i] = read.questionInt('enter the element :');
    }
    console.log(arr);
    callFunction.sum(arr, arrayLength);
} catch (err) {
    console.log(err);
}
