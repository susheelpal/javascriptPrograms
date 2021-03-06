
/******************************************************************************
 *  Execution       :   1. default node         cmd> node inventoryManagerMain.js
 *                      2. if nodemon installed cmd> nodemon inventoryManagerMain.js
 *
 *  Purpose         : Inventory Data Management.
 *
 *  @description    : Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, 
 *                    weight, price per kg.


 *
 *  @file           : inventoryManagerMain.js
 *  @overview       : Inventory Data Management.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 09-01-2020
 ******************************************************************************/

let read = require('readline-sync')
let call = require('./inventoryManagerBL')

console.log('-----Inventory Data Management-----');
console.log('are you inventory manager ? \n Press y for yes or n for no');
let check = read.question();
if (check === 'y' || check === 'Y') {
    for (; ;) {
        console.log('1. Rice ')
        console.log('2. Wheat ')
        console.log('3. Pulses ')
        console.log('4. Exit ')
        let choice = read.questionInt('enter your choice :')
        switch (choice) {
            case 1: call.inventoryStoreCalculateRice();
                break;
            case 2: call.inventoryStoreCalculateWheat();
                break;
            case 3: call.inventoryStoreCalculatePulses();
                break;
            case 4: process.exit(0);
            default: console.log('invalid input');
                process.exit(0);
        }
    }
} else
    console.log('Thanks to visiting this application');
