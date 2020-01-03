

/**
     * convert the decimal to binary and swap the nibble

     * @param {number} newInput - passed as an argument in swapNibble() .
     * @returns {number}  - returns the swap decimal value 
     
     */
swapNibble = (newInput) => {
    return ((newInput & 0x0f) << 4 | (newInput & 0xf0) >> 4)

}

/**
   * convert the decimal to binary and swap the nibble

   * @param {number} result - passed as an argument in powerOf2() which then used in while loop to check for power of 2
                              using mod 2 ==0 .
   
   
   */


powerOf2 = (result) => {
    while (result % 2 == 0) {
        result = result / 2;

    }
    if (result == 1) {
        console.log('its a power of 2');

    }
    else {
        console.log('its not a power of 2');
    }

}
module.exports = {

    swapNibble,
    powerOf2
}