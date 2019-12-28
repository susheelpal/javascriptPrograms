
/******************************************************************************
 *  Execution       :   1. default node         cmd> node stopwatchMain.js
 *                      2. if nodemon installed cmd> nodemon stopwatchMain.js
 *
 *  Purpose         : find the elapsed time.
 *
 *  @description    : Write a Stopwatch Program for measuring the time that elapses between the start and end clicks.

 *
 *  @file           : stopwatchMain.js
 *  @overview       : take a start time and end time and find the elapsed time between them. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 24-12-2019
 ******************************************************************************/

let callFunction = require('./stopwatchBL');
try {
    callFunction.elapsedTime();
} catch (err) {
    console.log(err);
}
