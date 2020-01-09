/**
 * @class Address
 * @class Person
 */
let read = require('readline-sync')
let fs = require('fs')
class Person {
    constructor(name, city, state, pincode, mobileNo) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.mobileNo = mobileNo;
    }
}

class Address {
    constructor() {
        this.addressbook = [];
        this.entry = { person: this.addressbook }
    }

    createAddress() {

        let name = read.question('enter your name :');
        let city = read.question('enter your city :');
        let state = read.question('enter your state :');
        let pincode = read.question('enter your pincode');
        let mobileNo = read.questionInt('enter your mobile number');
        let p = new Person(name, city, state, pincode, mobileNo);
        this.entry.person.push(p);
        fs.writeFileSync('addressBook.json', JSON.stringify(this.entry));
        console.log('details added successfully !!!');

    }

    deleteEntries(value) {
        let content = fs.readFileSync('addressBook.json');
        let addr = JSON.parse(content);
        for (let i = 0; i < addr.person.length; i++) {
            if (addr.person[i].id == value) {
                delete addr.person[i];
            }
        }
        addr.person.forEach(k => {
            if (addr.person[k] == null) {
                addr.person.splice(k, 1);
            }
        })
        // const result = addr.person.filter(value => value !== null);
        fs.writeFileSync('addressBook.json', JSON.stringify(addr));
        console.log('deleted successfully !!!')
    }

    modifyDetails() {
        const id = read.questionInt("Enter the ID to edit corresponding entry ");
        let content = fs.readFileSync('addressBook.json');
        let addr = JSON.parse(content);
        for (let i = 0; i < addr.person.length; i++) {
            if (addr.person[i].id == id) {
                const name = read.question("enter the name :");
                const city = read.question("enter the city :");
                const state = read.question("enter the state :");
                const pincode = read.question("enter the pin code :");
                const mobileNo = read.question("enter the mobile Number :");
                addr.person[i].name = name;
                addr.person[i].city = city;
                addr.person[i].state = state;
                addr.person[i].pincode = pincode;
                addr.person[i].mobileNo = mobileNo;
                console.log('updated successfully !!!');
            }
        }
        fs.writeFileSync('addressBook.json', JSON.stringify(addr));
    }

    displayDetails() {
        let details = JSON.parse(fs.readFileSync('addressBook.json'))
        console.log(details);
    }
}
module.exports = {
    Address,
    Person
}
/**
 * {
    "person": [
        {
        "id":1,
            "name": "susheel Pal",
            "city": "bangalore",
            "state": "karnataka",
            "pincode": 560025,
            "mobileNo": 8797340455
        },
        {
        "id":2,
            "name": "shreyas",
            "city": "bangalore",
            "state": "karnataka",
            "pincode": 560098,
            "mobileNo": 8797340455
        },
        {
        "id":3,
            "name": "sharanya",
            "city": "banglore",
            "state": "karnataka",
            "pincode": "560055",
            "mobileNo": 7411696506
        }
    ]
}
 */
