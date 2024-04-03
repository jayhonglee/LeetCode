/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
//     declare variables
    const match = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };
    let stack = [];
    
//     loop over the string
//          if its opening push to stack
//          else if its closing, match with the most current stack 
//              if not a match return false
//              or no more on stack
    
//     if stack is not empty return false else true
    
    for(const x of s) {
        if(x in match) {
            stack.push(x)
        } else {
            let temp = match[stack.pop()];
            if(temp !== x || !stack) return false;
        }
    }
    
    return stack.length === 0 ? true : false;
};