/**
 * @module insertElement
 * @module insertionSort
 */
let read = require('readline-sync');
exports.insertElement = (arr, length) => {
    for (let i = 0; i < length; i++) {
        arr[i] = read.questionInt('enter the element :');
    }
}

exports.insertionSort = (arr, length) => {
    for (let i = 1; i < length; i++) {
        let temp = arr[i];
        let j = i;
        while (j > 0 && temp < arr[j - 1]) {
            arr[j] = arr[j - 1];
            j = j - 1;
        }
        arr[j] = temp;
    }
}