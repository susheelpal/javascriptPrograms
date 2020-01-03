
let stackUtil = require('../../utility/stackUtil');
/**
 * @module balanceParentheses
 * @param {string} expr -will take the expression
 */

exports.balanceParentheses = (expr) => {
    let stack = new stackUtil.stack();
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '(') {
            stack.Push(expr[i]);
        }
        else if (expr[i] === ')') {
            if (stack.isEmpty() || stack.pop() != '(') {
                return false;
            }
        }
    }
    return stack.isEmpty();
}
