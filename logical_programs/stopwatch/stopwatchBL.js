/**
 * @module elapsedTime
 */
let read = require('readline-sync');
exports.elapsedTime = () => {
    console.log('press y to start the stop watch');
    console.log('press n to stop the stop watch');
    let startTime;
    let endTime;
    for (; ;) {
        let choice = read.question();
        switch (choice) {
            case 'y': startTime = new Date().getMilliseconds();
                break;
            case 'n': endTime = new Date().getMilliseconds();
                let elapsed = Math.abs(endTime - startTime);
                console.log('elapsed time :' + elapsed + ' ms');
                process.exit(0);
            default: console.log('invalid input');
                process.exit(0);
        }
    }
}