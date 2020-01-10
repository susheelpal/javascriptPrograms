let fs = require('fs');
let read = require('readline-sync');
let details = JSON.parse(fs.readFileSync('cliniqueDetails.json'));
// console.log(details.doctors[0].Id);

for (let i = 0; i < details.doctors.length; i++) {
    if (details.doctors[i].Id === 1236) {
        // console.log(details.doctors[i]);
    }
}
// console.log(details.doctors);

for (let i = 0; i < details.patients.length; i++) {
    let patient = details.patients[i].name;
    console.log(patient);

    if (details.patients[i].Id === 4111) {
        // console.log(details.patients[i]);
    }
}
