/**
 * @module harmonicNumber
 * @param {int} n - n is the number till i have to calculate harmonic number
 * @param {int} sum -to make sum of all the harmonic number from 1 to n 
 */

exports.harmonicNumber = (n) => {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    console.log(`${i - 1}th harmonic number is :` + sum);
}