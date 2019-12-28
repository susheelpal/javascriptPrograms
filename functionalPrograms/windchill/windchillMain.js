/******************************************************************************
 *  Execution       :   1. default node         cmd> node windchillMain.js
 *                      2. if nodemon installed cmd> nodemon windchillMain.js
 *
 *  Purpose         : print wind chill.
 *
 *  @description    : Write a program WindChill.java that takes two double command-line arguments t and v and prints the wind chill. 
 *                    Use Math.pow(a, b) to compute ab. Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour), 
 *                    the National Weather Service defines the effective temperature (the wind chill) to be:
 *                      w=35.74 + 0.6215t + (0.4275t - 35.75)*pow(v,0.16)

 *
 *  @file           : windchillMain.js
 *  @overview       : take value of a, b and c and find the quadratic equation.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 ******************************************************************************/

let callFunction = require('./windchillBL');

try {
    let args = process.argv.slice(2);
    let t = args[0];
    let v = args[1];

    callFunction.windChill(t, v);
} catch (err) {
    console.log(err);
}
