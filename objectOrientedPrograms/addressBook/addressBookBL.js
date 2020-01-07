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
    }

    createAddress() {

        let name = read.question('enter your name :');
        let city = read.question('enter your city :');
        let state = read.question('enter your state :');
        let pincode = read.question('enter your pincode');
        let mobileNo = read.questionInt('enter your mobile number');
        let p = new Person(name, city, state, pincode, mobileNo);
        this.addressbook.push(p);
        console.log(this.addressbook);
        fs.writeFile('../../utility/addressBook.json', JSON.stringify(this.addressbook), (err) => {
            if (err) throw err;
        });
        // fs.writeFileSync('utility/addressBook.json', JSON.stringify(this.addressbook))
        // console.log('done')
    }
}
let content = fs.readFileSync('../../utility/addressBook.json');
let addr = JSON.parse(content)
if (addr.person[i] == null) {
    
}
// console.log(addr.person[1])
// delete addr[0];
fs.writeFileSync('../../utility/addressBook.json', JSON.stringify(addr));

// console.log(addr[0])
// const address1 = new Address();
//const address1 = new Address();
// address1.createAddress();
// address1.createAddress();
// createAddress(addr)
/**
 * {
    "address": [
        {
            "name": "susheel Pal",
            "city": "bangalore",
            "state": "karnataka",
            "pincode": 560025,
            "mobileNo": 8797340455
        },
        {
            "name": "shreyas",
            "city": "bangalore",
            "state": "karnataka",
            "pincode": 560098,
            "mobileNo": 8797340455
        }
    ]
}
 */
