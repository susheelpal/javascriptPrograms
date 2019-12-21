/*
replace username
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