
/******************************************************************************
 *  Execution       :   1. default node         cmd> node cliniqueManagementMain.js
 *                      2. if nodemon installed cmd> nodemon cliniqueManagementMain.js
 *
 *  Purpose         : clinique Management.
 *
 *  @description    : This programme is used to manage a list of Doctors associated with the Clinique. This also manages 
 *                    the list of patients who use the clinique. It manages Doctors by Name, Id, Specialization and Availability 
 *                    (AM,  PM or both). It manages Patients by Name, ID, Mobile Number and Age. The Program allows users to search 
 *                    Doctor by name, id, Specialization or Availability.
 *
 *  @file           : cliniqueManagementMain.js
 *  @overview       : clinique Management.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 10-01-2020
 ******************************************************************************/
const readline = require('readline-sync');
let call = require('./cliniqueManagementBL')
try {
    let search = '';
    for (; ;) {
        const choice = readline.questionInt(`******Doctor****** \n Doctor by \n 1. Name \n 2. Specialisation \n 3. Id \n ********Patient******* \n Patients by \n 4. Name \n 5. Phone Number \n 6. Id  \n 7. Exit \n Enter the choice to search :`);
        switch (choice) {
            case 1: search = readline.question('enter the name of doctor you want to search ');
                searchDoctor(search);
                break;
            case 2: search = readline.question('enter the specialisation of doctor you want to search ');
                searchDoctor(search);
                break;
            case 3: search = readline.questionInt('enter the id of doctor you want to search ');
                searchDoctor(search);
                break;
            case 4: search = readline.question('enter the name of patient you want to search ');
                searchPatient(search);
                break;
            case 5: search = readline.question('enter the phone number of patient you want to search ');
                searchPatient(search);
                break;
            case 6: search = readline.question('enter the Id of patient you want to search ');
                searchPatient(search);
                break;
            case 7: process.exit(0);

            default: console.log('enter valid input');
                break;

        }
    }
} catch (err) {
    console.log(err);
}