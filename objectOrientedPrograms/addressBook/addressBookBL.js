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
        // console.log(this.addressbook);
        // fs.writeFileSync('addressBook.json', JSON.stringify(this.entry));
        fs.writeFile('addressBook.json', JSON.stringify(this.entry), (err) => {
            if (err) throw err;
        });
        console.log('Done !!!');

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
        console.log('Done !!!')
    }

    modifyDetails() {
        console.log("Modify details");

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
// const address1 = new Address();
// address1.deleteEntries(1);
    // console.log(addr[0])
    // const address1 = new Address();
    //const address1 = new Address();
    // address1.createAddress();
    // address1.createAddress();
    // createAddress(addr)
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
        }
    ]
}
 */
