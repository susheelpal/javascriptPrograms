
/******************************************************************************
 *  Execution       :   1. default node         cmd> node calenderMain.js
 *                      2. if nodemon installed cmd> nodemon calenderMain.js
 *
 *  Purpose         : print calender.
 *
 *  @description    : Store the Calendar in an 2D Array, the first dimension the week of the month and the second 
 *                    dimension stores the day of the week.
 *
 *  @file           : calenderMain.js
 *  @overview       : to print calender for given month and year.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-01-2020
 ******************************************************************************/

let read = require("readline-sync");
let util = require('./calenderBL');
let month = read.question("enter the month");
let year = read.question("enter the year");
year.length == 4 ? util.calender(month, year) : console.log("enter valid year");
