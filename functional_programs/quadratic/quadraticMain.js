/******************************************************************************
 *  Execution       :   1. default node         cmd> node quadraticMain.js
 *                      2. if nodemon installed cmd> nodemon quadraticMain.js
 *
 *  Purpose         : find quadratic equation.
 *
 *  @description
 *
 *  @file           : quadraticMain.js
 *  @overview       : take value of a, b and c and find the quadratic equation.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 ******************************************************************************/
let read = require('readline-sync');
let callFunction = require('./quadraticBL');

let a = read.question('enter the value of a :');
let b = read.question('enter the value of b :');
let c = read.question('enter the value of c :');

callFunction.findQuadratic(a, b, c);
