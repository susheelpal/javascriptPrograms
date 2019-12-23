/**
 * @module sum
 */
exports.sum = (arr, arrLength) => {
    console.log('the triplets are :')
    for (i = 0; i < arrLength; i++) {
        for (j = i + 1; j < arrLength; j++) {
            for (k = 0; k < arrLength; k++) {
                // console.log(`${arr[i]} ${arr[j]} ${arr[k]}`);
                if (arr[i] + arr[j] + arr[k] == 0) {
                    console.log(`sum of ${arr[i]}, ${arr[j]} and ${arr[k]} is 0`)
                }
            }
        }
    }
}