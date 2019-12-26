/**
 * @module insertElement
 * @module bubbleSort
 */
let read = require('readline-sync');
exports.insertElement = (arr, length) => {
    for (let i = 0; i < length; i++) {
        arr[i] = read.questionInt('enter the element :');
    }
}

exports.bubbleSort = (arr, length) => {
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            let temp = 0;
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}