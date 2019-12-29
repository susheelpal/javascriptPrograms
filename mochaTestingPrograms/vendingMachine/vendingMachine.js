/******************************************************************************
 *  Execution       :   1. default node         cmd> node vendingMachine.js
 *                      2. if nodemon installed cmd> nodemon vendingMachine.js
 *
 *  Purpose         : Vending Machine.
 *
 *  @description    : There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be returned by Vending Machine. 
 *                    Write a Program to calculate the minimum number of Notes as well as the Notes to be returned by 
 *                    the Vending Machine as a Change.

 *
 *  @file           : vendingMachine.js
 *  @overview       : calculate minimum number of notes to be returned by vending Machine. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-12-2019
 ******************************************************************************/

let read = require('readline-sync');
let callFunction = require('./vendingMachineBL');
console.log('There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be returned by Vending Machine.');
let amount=read.questionInt('enter the amount :');
callFunction.change(amount);
