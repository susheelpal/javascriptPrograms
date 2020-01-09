
/******************************************************************************
 *  Execution       :   1. default node         cmd> node addressBookMain.js
 *                      2. if nodemon installed cmd> nodemon addressBookMain.js
 *
 *  Purpose         : manipulation of addressbook with json file
 *
 *  @description    : This is a program that can be used to maintain an address book. An address book holds a
 *                    collection of entries, each recording a person's id,first and last names, address, city, 
 *                    state, zip, and phone number.
 *  @file           : addressBookMain.js
 *  @overview       : manipulation of addressbook with json file.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 ******************************************************************************/

let read = require('readline-sync')
let call = require('./addressBookBL')
console.log('---------Address Book-------')

let address = new call.Address();
for (; ;) {
    console.log(`1. Add Details`)
    console.log(`2. Delete Details`)
    console.log(`3. Modify Details`)
    console.log(`4. Display Details`)
    console.log(`5. Exit`)
    let choice = read.questionInt('Enter your choice :')
    switch (choice) {
        case 1: address.createAddress();
            break;
        case 2: let id = read.question('Enter the person\'s id you want to delete :')
            address.deleteEntries(id);
            break;
        case 3: address.modifyDetails();
            break;
        case 4: address.displayDetails();
            break;
        case 5: process.exit(0);
        default: console.log("no valid input");
            process.exit(0);

    }
}