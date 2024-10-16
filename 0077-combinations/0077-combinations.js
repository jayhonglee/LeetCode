/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [];
    
    const backtrack = (curr, j) => {
        if(curr.length === k) return ans.push([...curr]);
        
        for(let i = j; i <= n; i++) {
            curr.push(i);
            backtrack(curr, i + 1);
            curr.pop();
        }
    }
    
    backtrack([], 1);
    return ans;
};