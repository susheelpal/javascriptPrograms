
/**
 * @module - it will check for the two string are anagram or not
 * @param {String} sample1 - string to be checked 
 * @param {String} sample2 - string to be checked 
 */

exports.checkAnagram = (sample1, sample2) => {
    if (sample1.length == sample2.length) {
        sample1 = sample1.split('').sort().join();
        sample2 = sample2.split('').sort().join();
        console.log(sample1);
        console.log(sample2);

        if (sample1 == sample2) {
            console.log('its an anagram');
        } else {
            console.log('not an anagram');
        }
    } else {
        console.log('not of same length hence not an anagram');
    }
}
