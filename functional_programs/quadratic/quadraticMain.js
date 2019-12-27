/******************************************************************************
 *  Execution       :   1. default node         cmd> node quadraticMain.js
 *                      2. if nodemon installed cmd> nodemon quadraticMain.js
 *
 *  Purpose         : find quadratic equation.
 *
 *  @description    : find the roots of the equation a*x*x + b*x + c. Since the equation is x*x, hence there are 2 roots. 
 *                    The 2 roots of the equation can be found using a formula (Note: Take a, b and c as input values).
 *                    delta = b*b - 4*a*c
 *                    Root 1 of x = (-b + sqrt(delta))/(2*a)
 *                    Root 2 of x = (-b - sqrt(delta))/(2*a)

 *
 *  @file           : quadraticMain.js
 *  @overview       : take value of a, b and c and find the quadratic equation.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 ******************************************************************************/

let read = require('readline-sync');
let callFunction = require('./quadraticBL');
try {
    let a = read.question('enter the value of a :');
    let b = read.question('enter the value of b :');
    let c = read.question('enter the value of c :');

    callFunction.findQuadratic(a, b, c);

} catch (err) {
    console.log(err);
}
