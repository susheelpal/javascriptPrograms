
let read = require("readline-sync");
let util = require('./calenderBL');
let month = read.question("enter the month");
let year = read.question("enter the year");
if (year.length == 4) {
    util.calender(month, year);
}
else {
    console.log("enter valid year");
}
