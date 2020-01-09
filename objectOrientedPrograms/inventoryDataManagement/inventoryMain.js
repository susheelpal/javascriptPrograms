
/******************************************************************************
 *  Execution       :   1. default node         cmd> node inventoryMain.js
 *                      2. if nodemon installed cmd> nodemon inventoryMain.js
 *
 *  Purpose         : Inventory Data Management.
 *
 *  @description    : Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, 
 *                    weight, price per kg.


 *
 *  @file           : inventoryMain.js
 *  @overview       : Inventory Data Management.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 09-01-2020
 ******************************************************************************/

let read = require('readline-sync')
let call = require('./inventoryBL')

console.log('-----Inventory Data Management-----');
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
