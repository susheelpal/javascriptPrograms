
let fs = require('fs');
let details = JSON.parse(fs.readFileSync('cliniqueDetails.json'));
/**
 * @module - this method will search the doctor there in clinique json file using search parameter.
 * @param {*} search - keyword to search for entries in json file. 
 */

searchDoctor = (search) => {
    for (let i = 0; i < details.doctors.length; i++) {
        if (details.doctors[i].name == search) {
            console.log(details.doctors[i]);
        }
        if (details.doctors[i].Id == search) {
            console.log(details.doctors[i]);
        }
        if (details.doctors[i].specialisation == search) {
            console.log(details.doctors[i]);
        }

    }
}

/**
 * @module - this method will search the patients there in clinique json file using search parameter.
 * @param {*} search - keyword to search for entries in json file. 
 */

searchPatient = (search) => {
    for (let i = 0; i < details.patients.length; i++) {
        if (details.patients[i].name == search) {
            console.log(details.patients[i]);
        }
        if (details.patients[i].Id == search) {
            console.log(details.patients[i]);
        }
        if (details.patients[i].phoneNumber == search) {
            console.log(details.patients[i]);
        }

    }
}

module.exports = {
    searchDoctor, searchPatient
}
