
let element = require('readline-sync');
/**
 * @module myArray
 * @param {int} rows - number of rows of an array
 * @param {int} columns - number of columns of an array
 */

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
