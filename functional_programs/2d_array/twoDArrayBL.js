/**
 * @module myArray
 */
let element = require('readline-sync');
exports.myArray = (rows, columns) => {
    let arr = new Array(rows);
    for (i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
        for (j = 0; j < columns; j++) {
            let temp = element.question('enter element :');
            arr[i][j] = temp;
        }
    }
    console.log(arr);
}
