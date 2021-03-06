
/**
    * @module- print 2 dimension array of prime numbers
    * @param {number} n - range of numbers.
 */
let pnumbers = [];
primeNumbersGenerator = (n) => {
    pnumbers = checkPrimeNumber(n);
    let arr = new Array();

    //tempPNumbers array stores the prime number in string form so to work on anagram logic

    let tempPNumbers = pnumbers.map((ele) => {
        return ele.toString();
    });
    let anagramArr = [];
    for (let i = 0; i < tempPNumbers.length; i++) {
        for (let j = i + 1; j < tempPNumbers.length; j++) {
            if (checkAnagram(tempPNumbers[i], tempPNumbers[j])) {
                anagramArr.push(tempPNumbers[i], tempPNumbers[j]);
            }
        }

    }

    for (let i = 0; i < n / 100; i++) {
        arr[i] = new Array();
        let startIndex = i * 100;
        let endIndex = (i + 1) * 100;
        for (let j = startIndex; j < endIndex; j++) {

            arr[i] = anagramArr.filter((element) => {
                if (element > startIndex && element < endIndex) {
                    return element;
                }
            });
        }
    }

    return arr;
}

/**
 * @module- it will check for the number is prime or not
 * @param {Number} n - number to check for prime number 
 * @returns {Array} arr - returns an array of prime numbers
 */

checkPrimeNumber = (n) => {
    let arr = [];
    for (let i = 2; i < n; i++) {
        let count = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (!(count > 0))
            arr.push(i);
    }
    return arr;
}

/**
 * @module-it will check for the number is anagram or not
 * @param {Number} number1 - number to check for anagram with other number
 * @param {Number} number2 - number to check for anagram with other number
 * @returns {Boolean}  - returns true or false
 */

checkAnagram = (number1, number2) => {
    if (number1.length == number2.length) {
        number1 = number1.split('').sort((a, b) => { return a - b }).join();
        number2 = number2.split('').sort((a, b) => { return a - b }).join();
        if (number1 == number2) {
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }
}

module.exports = {
    checkAnagram, checkPrimeNumber, primeNumbersGenerator
}
