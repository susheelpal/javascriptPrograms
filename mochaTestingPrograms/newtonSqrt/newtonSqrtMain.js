/******************************************************************************
 *  Execution       :   1. default node         cmd> node newtonSqrt.js 
 *                      
 * 
 *  Purpose         : 
 *                      
 * @description     : write a program to compute the square root of a 
 *                    nonnegative number c given in the input using Newton's method.

 *  @file           : newtonSqrt.js
 *  @overview       : calculates the square root using newton's method 
 *                      
 *  @author         : shreyash kaushal <shreyashkaushal>
 *  @version        : 1.0
 *  @since          : 20-12-2019
 
 ******************************************************************************/

const readline = require('readline-sync');
const lib = require('./newtonSqrtBL');

try {
    const c = readline.question(' Enter the number ');

    // const ep = 1 * (10 ** (-15))
    console.log(lib.sqrt(c));
    // console.log(sqrt(c))
}
catch (err) {
    console.log(err);
}