/*
replace username
*/
/*exports.replace = (replace, question) => {
    question = question.replace("<<username>>", replace);
    console.log(question);

}*/
//using function keyword
exports.replace = function (replaceun, question) {
    question = question.replace("<<username>>", replaceun);
    console.log(question);
}