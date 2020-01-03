
/**
     * calculate the compound interest and monthly payment according to the formula 
     
     * @param {number} P - passed as an argument in monthlyPayment() as principal.
       @param {number} R - passed as an argument in monthlyPayment() as rate.
       @param {number} Y - passed as an argument in monthlyPayment() as year.
       @param {number} deno - taking as a temperory variable for storing denominator value.
       @param {number} payment - final payment value.
     * @returns {number} payment - returns payment using compound interest formula 
     
     */

monthlyPayment = (P, R, Y) => {
  const r = R / (12 * 100)
  const n = 12 * Y
  const deno = 1 - (1 + r) ** (-n)
  const payment = (P * r) / deno
  return payment
}

module.exports = {
  monthlyPayment
}