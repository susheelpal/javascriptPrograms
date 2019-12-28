
/**
 * @module sum
 * @param arr - array is group of values
 * @param {int} arrLength - length of the given array
 */

exports.sum = (arr, arrLength) => {
    console.log('the triplets are :')
    for (i = 0; i < arrLength; i++) {
        for (j = i + 1; j < arrLength; j++) {
            for (k = 0; k < arrLength; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                    console.log(`sum of ${arr[i]}, ${arr[j]} and ${arr[k]} is 0`)
                }
            }
        }
    }
}
