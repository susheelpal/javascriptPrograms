/******************************************************************************
 *  Execution       :   1. default node         cmd> node monthlyPayment.js 
 *                      
 * 
 *  Purpose         : 
 *                      
 * @description     : program to calculate monthlyPayment that reads in three 
 *                    command-line arguments P, Y, and R and calculates the monthly payments 
 *                    you would have to make over Y years to pay off a 
 *                    P principal loan amount at R per cent interest compounded monthly using formula 


 *  @file           : monthlyPayment.js
 *  @overview       :calculates the monthly payments P principal loan you would have to make 
 *                   over Y years to pay off amount at R per cent interest compounded monthly using formula 
 *                      
 *  @author         : shreyash kaushal <shreyashkaushal>
 *  @version        : 1.0
 *  @since          : 20-12-2019
 *
 ******************************************************************************/

const lib = require('./monthlyPaymentBL');
const readline = require('readline-sync');
try {
    const P = readline.question('enter the principal loan amount ');
    const R = readline.question('enter the rate percentage  ');
    const Y = readline.question('enter the duration to pay off ');
    console.log(' the monthly payment to be done ' + lib.monthlyPayment(P, R, Y));
}
catch (err) {
    console.log(err);
}