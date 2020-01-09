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
