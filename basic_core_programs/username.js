/******************************************************************************
 *  Execution       :   1. default node         cmd> node username.js
 *                      2. if nodemon installed cmd> nodemon username.js
 *
 *  Purpose         : Genrate distinct Coupon numbers
 *
 *  @description
 *
 *  @file           : username.js
 *  @overview       : read username from console and print message.
 *  @module         : username - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 20-12-2019
 *
 ******************************************************************************/

let username = require('readline-sync')
let util = require('../utility/basicCorePrograms')
let message = "Hello <<username>>,How are you";
try {
    let replace = username.question("enter the username :")
    let replaced = util.replace(replace, message);
} catch (err) {
    console.log(err);
}

