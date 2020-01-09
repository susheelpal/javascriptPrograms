
/******************************************************************************
 *  Execution       :   1. default node         cmd> node stockAccManagementMain.js
 *                      2. if nodemon installed cmd> nodemon stockAccManagementMain.js
 *
 *  Purpose         : stock Account Management
 *
 *  @description    : Write a program to read in Stock Names, Number of Share, Share Price.
 *                    Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @file           : stockAccManagementMain.js
 *  @overview       : stock Account Management
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 09-1-2019
 ******************************************************************************/

const read = require('readline-sync');
const call = require('./stockAccManagementBL');

try {
    console.log(' ********* Stock Account Management ********* ');
    const stockEntry = new call.StockManagement();
    for (; ;) {
        console.log(`1. Add stock to stock portfolio `);
        console.log(`2. Calculate  stock stock value `);
        console.log(`3. Print Entries  of address book `);
        console.log(`4. Exit`)
        const choice = read.questionInt('Enter your choice :')
        switch (choice) {
            case 1: stockEntry.addStock();
                break;
            case 2: stockEntry.allStockReport();
                break;
            case 3: stockEntry.printStock();
                break;
            case 4: process.exit(0);
            default: console.log("no valid input");
                process.exit(0);
        }
    }
}
catch (err) {
    console.log(err);
}
