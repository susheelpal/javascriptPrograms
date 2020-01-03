
/******************************************************************************
 *  Execution       :  1. default node         cmd> node anagramPrimeNumMain.js
 *  @description    :  Extend the Prime Number Program and store only the numbers in that 
                       range that are Anagrams. For e.g. 17 and 71 are both Prime and Anagrams 
                       in the 0 to 1000 range. Further store in a 2D Array the numbers that are
                       Anagram and numbers that are not Anagram
 *  @file           :  anagramPrimeNumMain.js
 *  @overview       :  Print the anagram prime numbers in a given range in a 2 D array. 
 *
 *  @author         :  Susheel Pal <sushilk497@gmail.com>
 *  @version        :  1.0
 *  @since          :  03-01-2020
 ******************************************************************************/

const anagramPrimeNumBLObj = require('./anagramPrimeNumBL');
const readline = require('readline-sync');
try {
    const range = readline.question('enter the range of number ');
    let resultantAnagramNumbers = anagramPrimeNumBLObj.primeNumbersGenerator(range);
    console.table(resultantAnagramNumbers);
}
catch (err) {
    console.log(err);
}
