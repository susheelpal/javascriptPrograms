
/**
    * convert the decimal into binary representation

    * @param {number} input - passed as an argument in toBinary() as a decimal value.
    * @param {Array} binary - array which stores all the iteration value that is each bit either 0 or 1 
    
    */

toBinary = (input) => {
    let binary = []
    let binaryValue = ""
    let i = 0;
    while (input > 0) {
        binary[i++] = input % 2;
        input = Math.floor(input / 2);
    }
    let g = binary.reverse();
    for (let key in g) {
        binaryValue += g[key];
    }
    return binaryValue;

}
module.exports = {
    toBinary
}
