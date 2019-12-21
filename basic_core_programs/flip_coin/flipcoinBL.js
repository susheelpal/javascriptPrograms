var count1 = 0;
var count0 = 0;
exports.flippedCoinCount = (number) => {
    for (i = 0; i < number; i++) {
        let flipped = Math.round(Math.random() * (1 - 0)) + 0;
        // console.log(flipped);    
        if (flipped == 1) {
            count1++;
        }
        else
            count0++;
    }
}

exports.flippedPercentageOf1 = (number) => {
    let flipped1 = count1 / number * 100;
    return flipped1;
}

exports.flippedPercentageOf0 = (number) => {
    let flipped0 = count0 / number * 100;
    return flipped0;
}