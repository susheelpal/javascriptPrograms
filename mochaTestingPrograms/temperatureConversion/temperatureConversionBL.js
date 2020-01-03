
/**
     * convert the temperature using formula -
     Celsius to Fahrenheit:   (°C × 9/5) + 32 = °F
     Fahrenheit to Celsius:   (°F − 32) x 5/9 = °C

     * @param {number} temp - passed as an argument in celToFarh() as well as farhToCel().
     * @returns {number} temp - returns temp using conversion formula 
     
     */


celToFarh = (temp) => {
    return ((temp * 9 / 5) + 32)
}

farhToCel = (temp) => {
    return ((temp - 32) * 5 / 9)
}

module.exports={
    celToFarh,
    farhToCel
}