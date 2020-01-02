
exports.balanceParentheses = (expr) => {
    let stack = [];
    for (let i = 0; i < expr.length; i++) {

        if (expr[i] === '(') {
            stack.push(expr[i]);
        }

        else if (expr[i] === ')') {
            if (stack.length == 0 || stack.pop() != '(') {
                return false;
            }
        }
    }
    return stack.length == 0;
}
