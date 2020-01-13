
/******************************************************************************
 *  Execution       :   1. default node         cmd> node observerMain.js
 *                      2. if nodemon installed cmd> nodemon observerMain.js
 *
 *  Purpose         : example of observer design pattern
 *
 *  @description    : Observer Design Pattern
 *
 *  @file           : observerMain.js
 *  @overview       : observer design pattern
 *  @module         : module - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-1-2019
 *
 ******************************************************************************/

const call = require('./observerBL');
try {
    const sub = new call.Subject();
    sub.subscribe(call.Observer1);
    sub.subscribe(call.Observer2);
    sub.fire();
    sub.unsubscribe(call.Observer1);
    sub.fire();
}
catch (err) {
    console.log(err);
}
