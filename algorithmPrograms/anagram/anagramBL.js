
/**
 * @module - it will check for the two string are anagram or not
 * @param {String} firstString - string to be checked 
 * @param {String} secondString - string to be checked 
 */

exports.checkAnagram = (firstString, secondString) => {
    if (firstString.length == secondString.length) {
        firstString = secondString.split('').sort().join();
        secondString = secondString.split('').sort().join();
        console.log(firstString);
        console.log(secondString);

        if (firstString == secondString) {
            console.log('its an anagram');
        } else {
            console.log('not an anagram');
        }
    } else {
        console.log('not of same length hence not an anagram');
    }
}
