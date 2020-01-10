let fs = require('fs');
let read = require('readline-sync');
let details = JSON.parse(fs.readFileSync('cliniqueDetails.json'));
// console.log(details.doctors[0].Id);
exports.doctorAppointment = () => {
    console.log(details.doctors);
    let id = read.question('Enter doctor\'s ID :');
    let date = read.question('Enter appointment date :');

}
for (let i = 0; i < details.doctors.length; i++) {
    if (details.doctors[i].Id === 1236) {
        // console.log(details.doctors[i]);
    }
}
// console.log(details.doctors);

for (let i = 0; i < details.patients.length; i++) {
    let patient = details.patients[i].name;
    // console.log(patient);

    if (details.patients[i].Id === 4111) {
        // console.log(details.patients[i]);
    }
}
const v = {
    "person": [
        {
            "name": "susheel pal",
            "city": "bangalore",
            "state": "karnataka",
            "pincode": "560098",
            "mobileNo": 6695654654
        },
        {
            "name": "",
            "city": "dh",
            "state": "hd",
            "pincode": "55465",
            "mobileNo": 7464
        },
        {
            "name": "sharanya",
            "city": "banglore",
            "state": "karnataka",
            "pincode": "560055",
            "mobileNo": 7411696506
        }
    ]
}