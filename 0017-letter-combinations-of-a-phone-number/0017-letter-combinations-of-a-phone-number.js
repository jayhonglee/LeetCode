/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) return [];
    
    const digitsMap = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }
    
    let ans = [];
    const backtrack = (curr) => {
        if(curr.length === digits.length) {
            ans.push(curr);
            return;
        }
        
        const currentDigit = curr.length;
        const options = digitsMap[digits[currentDigit]];
        
        for(const digit of options) {
            backtrack(curr + digit);
        }
        
        
    }
    
    backtrack("");
    return ans;
};