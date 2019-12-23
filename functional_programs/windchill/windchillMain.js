/******************************************************************************
 *  Execution       :   1. default node         cmd> node windchillMain.js
 *                      2. if nodemon installed cmd> nodemon windchillMain.js
 *
 *  Purpose         : print wind chill.
 *
 *  @description
 *
 *  @file           : windchillMain.js
 *  @overview       : take value of a, b and c and find the quadratic equation.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 ******************************************************************************/
// let read = require('readline-sync');
let callFunction = require('./windchillBL');
let args = process.argv.slice(2);
let t = args[0];
let v = args[1];

callFunction.windChill(t, v);