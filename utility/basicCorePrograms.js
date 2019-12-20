/*
replace username
*/
exports.replace = (replace, question) => {
    question = question.replace("<<username>>", replace);
    console.log(question);

}