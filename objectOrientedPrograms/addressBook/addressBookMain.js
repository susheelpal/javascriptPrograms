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