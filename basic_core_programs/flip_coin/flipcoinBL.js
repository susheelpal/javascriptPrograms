/**
 * Flip coin.
 * @module flipcoinBL
 */
let count1 = 0;
let count0 = 0;
    /**
     * @param {int} number - number of times to flip
     * print percentage of flipped coin faces
     */
exports.flippedCoinCount = (number) => {
    for (i = 0; i < number; i++) {
        let flipped = Math.round(Math.random() * (1 - 0)) + 0;
        if (flipped == 1) {
            count1++;
        }
        else
            count0++;
    }

    let flipped1 = count1 / number * 100;
    console.log("percentage of head flipped", flipped1);

    let flipped0 = count0 / number * 100;
    console.log("percentage of tail flipped", flipped0);
}