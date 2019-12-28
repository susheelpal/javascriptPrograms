
/**
 * @module primeFactor
 * @param {int} number - given number to find the prime factors
 * @param {int} count - it will count the factors of given number
 */

exports.primeFactor = (number) => {
    for (i = 1; i * i <= number; i++) {
        let count = 0;
        for (j = 2; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 1) {
            console.log(i);
        }
    }
}
