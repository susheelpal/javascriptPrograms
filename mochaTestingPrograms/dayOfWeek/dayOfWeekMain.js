/******************************************************************************
 *  Execution       :   1. default node         cmd> node dayofweek.js 
 *                      
 * 
 *  Purpose         : 
 *                      
 * @description     : dayofweek() that takes date as input and prints the day of the week that date falls on it.

 *  @file           : dayofweek.js
 *  @overview       : calculate the day of week that falls on the given date using formula from the gregorian calendar
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 20-12-2019
 *
 ******************************************************************************/
const readline = require('readline-sync');
const lib = require('./dayOfWeekBL');
try {
    const d = readline.questionInt('Enter the day ');
    const m = readline.questionInt('Enter the month ');
    const y = readline.questionInt('Enter the year ');
    var day;
    let result = lib.dayOfWeek(m, d, y);
    console.log(result)
    console.log(lib.dayOfWeek(1, 3, 2020))
    switch (result) {        //using switch case to represent result value in days
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        default:
            text = "No day found ";

    }
    console.log('Day is ' + day);
}
catch (err) {
    console.log(err)
}