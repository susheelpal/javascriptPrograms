/**
    * calculate the compound interest and monthly payment according to the formula 
    
    * @param {number} c - passed as an argument in sqrt() as the number whose square root we need to find.
      @param {number} t - its a variable which stores the value of the average of c/t and t.
      @param {number} ep - its a constant value of epsilon = 1e-15.
    * @returns {number}t -returns the square root. 
    
    */
sqrt = (c) => {
    let t = c

    const ep = 1 * (10 ** (-15))

    // console.log(temp)
    while ((Math.abs(t - (c / t))) > ep * t) {
        t = ((c / t) + t) / 2
    }

    return Math.round(t)
}
module.exports = {
    sqrt
}