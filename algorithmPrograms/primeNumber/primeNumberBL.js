
/**
 * it will check for the number is prime or not
 * @param {Number} num - number to check for prime number 
 * @returns {boolean} - if the number is prime it return true 
 */
checkPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

/**
 * it will display all the prime numbers
 * @param {Number} n - range of numbers 
 * @returns {Array} - return array of prime numbers 
 */

display = (n) => {
    const result = [2]
    for (let i = 3; i < n; i += 2) {
        if (checkPrime(i)) {
            result.push(i)
        }
    }
    return result;
}

/**
 * it will check for the number is palindrome or not
 * @param {Number} input - number to check for palindrome 
 * @returns {boolean} - if the number is palindrome it return true 
 */

checkPalindrome = (input) => {

    let rem, temp, final = 0;
    temp = input;
    while (input > 0) {
        rem = input % 10;
        input = parseInt(input / 10);
        final = final * 10 + rem;
    }
    if (final == temp) {
        return true
    }

}
module.exports = {
    checkPalindrome,
    checkPrime,
    display
}
