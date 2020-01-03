/******************************************************************************
 *  Execution       :   1. default node         cmd> node temperatureConversion.js 
 *                      
 * 
 *  Purpose         : 
 *                      
 * @description     : given the temperature in fahrenheit as input outputs 
 *                    the temperature in Celsius or viceversa using the formula


 *  @file           : temperatureConversion.js
 *  @overview       : convert the given temperature from fahrenheit to celcius and vice versa
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 20-12-2019
 *
 ******************************************************************************/

const readline = require('readline-sync');
const lib = require('./temperatureConversionBL');

try {
    const temp = readline.question('enter the temperature value');
    console.log('temperature celcius to farehnhit ' + celToFarh(temp)); //calling function
    console.log('temperature farehnhit to celcius ' + farhToCel(temp)); //calling function
}
catch (err) {
    console.log(err);
} 