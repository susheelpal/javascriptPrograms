let read = require('readline-sync')
let call = require('./cliniqueManagementBL')

console.log('***** Clinique Management *****');
let id = read.question('Enter doctor\'s ID :');
let date = read.question('Enter appointment date :');

