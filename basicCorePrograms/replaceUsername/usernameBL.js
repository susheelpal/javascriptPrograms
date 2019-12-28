/**
 * @module replaceun
 * @param {String} replace the word which one should replace
 * @param {String} question the whole String where i have to replace
 */

exports.replaceun = (replace, question) => {
    question = question.replace("<<username>>", replace);
    return question;
}
//using function keyword
/*exports.replace = function (replaceun, question) {
    question = question.replace("<<username>>", replaceun);
    console.log(question);
}*/