/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits === "") return [];
    
    const digitsArr = Array.from(digits);
    const finalLength = digitsArr.length;
    let ans = [];
    
    const options = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r', 's'],
        8: ['t','u','v'],
        9: ['w','x','y','z'],
    }
    
    const backtrack = (current, i) => {
        if(finalLength === current.length) return ans.push(current.join(""));
        
        const number = digitsArr[i];
        
        for(const letter of options[number]) {
            current.push(letter);
            backtrack(current, i + 1);
            current.pop();
        }
    }
    
    backtrack([], 0)
    return ans;
};