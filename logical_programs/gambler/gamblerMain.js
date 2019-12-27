/******************************************************************************
 *  Execution       :   1. default node         cmd> node gamblerMain.js
 *                      2. if nodemon installed cmd> nodemon gamblerMain.js
 *
 *  Purpose         : simple gambler game.
 *
 *  @description    : Simulates a gambler who start with $stake and place fair $1 bets until he/she goes broke (i.e. has no money) or 
 *                    reach $goal. Keeps track of the number of times he/she wins and the number of bets he/she makes. 
 *                    Run the experiment N times, averages the results, and prints them out.

 *
 *  @file           : gamblerMain.js
 *  @overview       : Simulates a gambler who start with $stake and place fair $1 bets until he/she goes broke (i.e. has no money) or reach $goal. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 ******************************************************************************/

let read = require('readline-sync');
let callFunction = require('./gamblerBL');

try {
    let stake = read.question('enter the value of stake :');
    let goal = read.question('enter the value of goal :');
    let trials = read.question('enter the number of trials :');

    callFunction.gameProcess(stake, goal, trials);

} catch (err) {
    console.log(err);
}
