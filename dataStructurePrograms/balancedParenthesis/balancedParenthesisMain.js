let read = require('readline-sync')
let callFunction = require('./balancedParenthesisBL');

let exp = read.question("Enter the user input :");
let result = callFunction.balanceParentheses(exp);

if (result == true)
    console.log("Balanced !!");
else
    console.log("Not Balanced!!");
