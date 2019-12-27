/******************************************************************************
 *  Execution       :   1. default node         cmd> node username.js
 *                      2. if nodemon installed cmd> nodemon username.js
 *
 *  Purpose         : Print a message with username
 *
 *  @description    : User Input and Replace String Template “Hello <<UserName>>, How are you?”
 *
 *  @file           : username.js
 *  @overview       : read username from console and print message.
 *  @module         : username - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 20-12-2019
 *
 ******************************************************************************/

let username = require('readline-sync');
let util = require('./usernameBL');

let message = "Hello <<username>>,How are you";
try {
    let replaceun = username.question("enter the username :");
    let replaced = util.replaceun(replaceun, message);
    console.log(replaced);
} catch (err) {
    console.log(err);
}
