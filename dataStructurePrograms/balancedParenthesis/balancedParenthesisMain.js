
/******************************************************************************
 *  Execution       :   1. default node         cmd> node balancedParenthesisMain.js
 *                      2. if nodemon installed cmd> nodemon balancedParenthesisMain.js
 *
 *  Purpose         : balance parenthesis.
 *
 *  @description    : Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used 
 *                    to order the performance of operations. Ensure parentheses must appear in a balanced fashion.

 *
 *  @file           : balancedParenthesisMain.js
 *  @overview       : to check proper opening and closing parenthesis has given to expression.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-01-2020
 ******************************************************************************/

let read = require('readline-sync')
let callFunction = require('./balancedParenthesisBL');
try {
    let exp = read.question("Enter the user input :");
    let result = callFunction.balanceParentheses(exp) == true ? "Balanced !!" : "Not Balanced!!";
    console.log(result)
} catch (err) {
    console.log(err);
}
