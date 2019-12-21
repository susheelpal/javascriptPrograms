let read = require('readline-sync');
let callfunction = require('./flipcoinBL');
let number = read.question('how many times you want to flip :');

callfunction.flippedCoinCount(number);
