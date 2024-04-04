/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
//     declare variables
    let arrOne, arrTwo;
    
//     create a function to store it in stack 
    const type = (str) => {
        let stack = [];
        
        for (char of str) {
            if(char === "#") {
                stack.pop();
            } else {
                stack.push(char);
            }
        }
        
        return stack;
    }
    
//      run the function with input s and input t
    arrOne = type(s);
    arrTwo = type(t);
    
//     compare two stacks
    return arrOne.join("") === arrTwo.join("");
};