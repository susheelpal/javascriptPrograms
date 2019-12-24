/**
 * @module elapsedTime
 */
let read = require('readline-sync');
exports.elapsedTime = () => {
    // let elapsed = endTime - startTime;
    // console.log('elapsed time :' + elapsed);
    console.log('press y to start the stop watch');
    console.log('press n to stop the stop watch');
    for (; ;) {
        let startTime;
        let endTime;
        let choice = read.question();
        switch (choice) {
            case 'y': startTime = new Date().getMilliseconds();
                break;
            case 'n': endTime = new Date().getMilliseconds();
                let elapsed = endTime - startTime;
                console.log('elapsed time :' + elapsed);
                process.exit(0);
                break;
            default: console.log('invalid input');
                process.exit(0);
        }
    }
}