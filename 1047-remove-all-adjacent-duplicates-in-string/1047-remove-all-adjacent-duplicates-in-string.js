/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
//   declare variables
    let stack = [];
    
//     go over the string s
//      if found in stack top, pop it and move on
//     if not push it in stack
    for(char of s) {
        if(stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
//     return stack
    return stack.join("");
};