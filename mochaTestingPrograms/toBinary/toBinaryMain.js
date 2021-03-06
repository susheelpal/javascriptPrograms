/******************************************************************************
 *  Execution       :   1. default node         cmd> node toBinary.js 
 *                      
 * 
 *  Purpose         : 
 *                      
 * @description     : Write a program toBinary that outputs the binary (base 2) 
 *                    representation of the decimal number typed as the input.

 *  @file           : toBinary.js
 *  @overview       : to convert decimal to binary representation. 
 *                      
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 20-12-2019
 *
 ******************************************************************************/
const readline = require('readline-sync');
const lib = require('./toBinaryBL');

try {
    let input = readline.question('Enter the decimal value ')
    // const result = parseInt(input, 10).toString(2);
    let result = lib.toBinary(input);
    console.log(result);
}
catch (err) {
    console.log(err);
}