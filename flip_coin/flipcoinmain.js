let read = require('readline-sync');
let callfun = require('./flipcoinBL');
let number = read.question('tell how many times you want to flip :');

callfun.flippedCoinCount(number);
console.log('percentage of 1 :' + callfun.flippedPercentageOf1(number));
console.log('percentage of 0 :' + callfun.flippedPercentageOf0(number));
