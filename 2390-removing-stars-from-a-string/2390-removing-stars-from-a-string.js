/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];
    
//     loop over the string s
    for(const char of s) {
        
//     if the character is star, pop the stack peak
        if(char === "*") stack.pop();
        else stack.push(char);
    }
    
    return stack.join("");
};