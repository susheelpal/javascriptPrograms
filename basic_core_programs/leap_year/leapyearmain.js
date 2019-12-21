let read = require('readline-sync');
let callfun = require('./leapyearBL');

let number = read.question('enter year in 4 digit :');
callfun.checkYear(number);