/**
 * @module-it will merge the two sub sorted array
 * @param {Array} leftArr - contains the value from 0 to mid 
 * @param {Array} rightArr - contains the value from mid to size of array
 * @returns {Array} sortedArr - contains the merge of leftArr and rightArr
 */

doMerging = (leftArr, rightArr) => {
    let sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0])
            leftArr = leftArr.slice(1)
        } else {
            sortedArr.push(rightArr[0])
            rightArr = rightArr.slice(1)
        }
    }
    while (leftArr.length) { sortedArr.push(leftArr.shift()) }
    while (rightArr.length) { sortedArr.push(rightArr.shift()) }
    return sortedArr
}

/**
* it will perform merge sort by spliting array using array slice method
* @param {Array} arr - array that need to be sorted 
* @returns {function} doMerging() - recursively calls doMerging() and return the final sorted array
*/

doMergeSort = (arr) => {
    if (arr.length < 2) {
        return arr
    } else {
        let midpoint = parseInt(arr.length / 2)
        let leftArr = arr.slice(0, midpoint)
        let rightArr = arr.slice(midpoint, arr.length)
        return doMerging(doMergeSort(leftArr), doMergeSort(rightArr))
    }
}
module.exports = {
    doMergeSort,
    doMerging
}