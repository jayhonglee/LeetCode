/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
//     declare variables
    let stack = [];
    
//     loop over the string
    for(const char of s) {
        let stackLast = stack[stack.length - 1];
        
        //     if stack[stack.length - 1] !== char && stack[stack.length - 1].toLowerCase() === char.toLowerCase(), stack.pop(); else stack.push(char);
        if(stackLast !== char && stackLast?.toLowerCase() === char.toLowerCase()) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
//     return stack.join("")
    return stack.join("");
};