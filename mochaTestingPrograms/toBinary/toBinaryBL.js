
/**
    * convert the decimal into binary representation

    * @param {number} input - passed as an argument in toBinary() as a decimal value.
    * @param {Array} binary - array which stores all the iteration value that is each bit either 0 or 1 
    
    */
toBinary = (input) => {
    let binary = []
    let i = 0;
    while (input > 0) {
        binary[i++] = input % 2
        input = Math.floor(input / 2)


    }
    //console.log(toBinary(input));
    for (i = binary.length - 1; i > 0; i--) {
        console.log(binary[i])
    }
}
module.exports = {
    toBinary
}