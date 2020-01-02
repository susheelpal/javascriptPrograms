
exports.calender = (month, year) => {
    function day(month, day, year) {
        let y = year - (14 - month) / 12;
        let x = y + y / 4 - y / 100 + y / 400;
        let m = month + 12 * ((14 - month) / 12) - 2;
        let d = (day + x + (31 * m) / 12) % 7;
        return d;
    }
    function isLeapYear() {
        if (year % 4 == 0 && year % 100 != 0 || year % 400) {
            return true;
        }
        else {
            return false;
        }
    }
    let months = [" ", "january", "february", "march", "april", "may", "june", "july", "august",
        "september", "october", "november", "december"]
    let days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (month == 2 && isLeapYear(year))
        days[month] = 29;
    console.log(" " + months[month] + " " + year);
    console.log("S M Tu W Th F S");
    let x = day(month, 1, year)

    let str = "";
    for (let i = 1; i < days[month]; i++) {
        if (i % 8 == 0)
            str = str.concat('\n');
        else
            str = str.concat(i + " ");
    }
    console.log(str);
}
