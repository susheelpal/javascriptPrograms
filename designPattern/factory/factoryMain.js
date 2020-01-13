
/******************************************************************************
 *  Execution       :   1. default node         cmd> node factoryMain.js
 *                      2. if nodemon installed cmd> nodemon factoryMain.js
 *
 *  Purpose         : example of factory design pattern 
 *
 *  @description    : Factory Design Pattern
 *
 *  @file           : factoryMain.js
 *  @overview       : factory design pattern
 *  @module         : module - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-1-2019
 *
 ******************************************************************************/
let call = require('./factoyBL')
let osFactory = new call.OSFactory();
const os1 = osFactory.create('Android');
const os2 = osFactory.create('Ios');
const os3 = osFactory.create('Ubuntu');
console.log(os1);
console.log(os2);
console.log(os3);
