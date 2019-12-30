
/**
 * @module change
 * @param {number} amount - get change of amount
 */
exports.change = amount => {
    let notes = [1000, 500, 100, 50, 10, 5, 2, 1]
    let count = [];
    for (let i = 0; i < notes.length; i++) {
        if (amount >= notes[i]) {
            count[i] = Math.floor(amount / notes[i]);
            amount = amount - count[i] * notes[i]
        }
    }
    let filtered = count.filter((element) => {
        if (element != null) {
            return element;
        }
    });
    for (let i in count) {
        if (count[i] != 0) {
            console.log(' notes of ' + notes[i] + ' : ' + count[i]);
        }
    }
    return filtered;
}
