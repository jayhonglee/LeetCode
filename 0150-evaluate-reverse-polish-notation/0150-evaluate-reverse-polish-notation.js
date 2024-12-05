/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let arithmetics = ['+', '-', '*', '/'];
    for(const token of tokens) {
        if(arithmetics.includes(token)) {
            const secondNum = stack.pop();
            const firstNum = stack.pop();
            
            let newValue = -1;
            switch(token) {
                case '+':
                    newValue = firstNum + secondNum;
                    break;
                case '-':
                    newValue = firstNum - secondNum;
                    break;
                case '*':
                    newValue = firstNum * secondNum;
                    break;
                case '/':
                    newValue = Math.trunc(firstNum / secondNum);
                    break;
            }
            
            stack.push(newValue);
        } else {
            stack.push(+token);
        }
    }
    
    return stack.pop();
};