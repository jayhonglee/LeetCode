/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const backtrack = (current) => {
        if(right > left) return;
        if(current.length === n * 2 && left === right) ans.push(current);
        if(current.length > n * 2) return;
        
        for(const char of ["(", ")"]) {
            if(char === "(") left++;
            else right++;
            
            backtrack(current + char);
            
            if(char === "(") left--;
            else right--;
        }
    }    
    
    let left = 0, right = 0, ans = [];
    backtrack("");
    
    return ans;
};

