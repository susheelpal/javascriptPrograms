
/******************************************************************************
 *  Execution       :   1. default node         cmd> node singletonMain.js
 *                      2. if nodemon installed cmd> nodemon singletonMain.js
 *
 *  Purpose         : example of singleton design pattern
 *
 *  @description    : Singleton Design Pattern
 *
 *  @file           : singletonMain.js
 *  @overview       : Singleton design pattern
 *  @module         : module - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-1-2019
 *
 ******************************************************************************/

let call = require('./singletonBL')
let s = new call.Singleton('Object1');
const obj1 = s.getObject();
const obj2 = s.getObject();
console.log(obj1)
console.log(obj2)
console.log(obj1 == obj2);
