
/**
     * print the day of week from formula -
     * y0 = y − (14 − m) / 12
       x = y0 + y0/4 − y0/100 + y0/400
       m0 = m + 12 × ((14 − m) / 12) − 2
       d0 = (d + x + 31m0 / 12) mod 7

     * @param {number} m - passed as an argument in dayOFweek() represent the month.
     * @param {number} d - passed as an argument in dayOFweek() represent the day.
     * @param {number} y - passed as an argument in dayOFweek() represent the year.
     * @param {number} y0 - holds the value according to the formula
     * @param {number} x - holds the value according to the formula.
     * @param {number} m0 - holds the value according the formula.
     * @param {number} d0 - holds the final value that represents the day.
     * @returns {number} d0 - returns d0 
     
     */

dayOfWeek = (m, d, y) => {
  let y0 = Math.round(y - (14 - m) / 12)
  // console.log(y0);
  let x = Math.round(y0 + y0 / 4 - y0 / 100 + y0 / 400);
  //  console.log(x);
  let m0 = Math.round(m + 12 * ((14 - m) / 12) - 2);
  // console.log(m0);
  let d0 = Math.round((d + x + (31 * m0 / 12)) % 7)
  // console.log(d0);
  return d0
}
module.exports = {
  dayOfWeek
}    