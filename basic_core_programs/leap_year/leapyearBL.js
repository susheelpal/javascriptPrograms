/**
 * leapyear
 * @module checkLeapYear
 */

exports.checkLeapYear = (number) => {
    if (number % 4 == 0)
        console.log(number + ' is a leap year ');
    else
        console.log(number + ' is not a leap year');
}

exports.checkYear = (number) => {
    if (number.length == 4)
        this.checkLeapYear(number);
    else
        console.log('enter a valid year. please..');
}