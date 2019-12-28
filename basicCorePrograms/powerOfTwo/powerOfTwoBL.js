
/**
 * @module findPower
 * @param {int} args -to do power of given number of times 
 */
exports.findPower = (args) => {
    for (i = 1; i < args; i++) {
        console.log(`power of 2 to the ${i} :` + Math.pow(2, i));
    }
}