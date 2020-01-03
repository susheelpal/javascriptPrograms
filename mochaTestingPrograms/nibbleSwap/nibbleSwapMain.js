/******************************************************************************
 *  Execution       :   1. default node         cmd> node nibbleSwap.js 
 *                      
 * 
 *  Purpose         : 
 *                      
 * @description     : Write program to read an integer as an Input, 
 *                    convert to Binary using toBinary function and perform  
 *                    Swap nibbles and find the new number and also check whether the resultant number is a power of 2



 *  @file           : nibbleSwap.js
 *  @overview       : convert the given decimal to binary and swapping the nibble and also checking for power of 2
 *  @author         : shreyash kaushal <shreyashkaushal>
 *  @version        : 1.0
 *  @since          : 20-12-2019
 *
 ******************************************************************************/

const readline = require('readline-sync');
const lib = require('./nibbleSwapBL');
try {
    let input = readline.question('Enter the decimal value ');
    console.log(lib.swapNibble(input)); //calling swapping nibble function 
    let result = lib.swapNibble(input);
    lib.powerOf2(result);               // calling checking of power of  2 function 
}
catch (err) {
    console.log(err);
}