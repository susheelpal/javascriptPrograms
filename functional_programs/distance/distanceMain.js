/******************************************************************************
 *  Execution       :   1. default node         cmd> node distanceMain.js
 *                      2. if nodemon installed cmd> nodemon distanceMain.js
 *
 *  Purpose         : find distance from the given axis to origin point.
 *
 *  @description
 *
 *  @file           : distanceMain.js
 *  @overview       : take value of x and y and find the distance from given axis to the origin.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 ******************************************************************************/
let read = require('readline-sync');
let callFunction = require('./distanceBL');
let args = process.argv.slice(2);
let x = args[0];
let y = args[1];

callFunction.distance(x, y);