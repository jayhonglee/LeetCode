/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const backtrack = (curr) => {
        if(curr.length === k) return ans.push([...curr]);
        const lastElement = curr[curr.length - 1] || 0;
        
        for(let i = lastElement + 1; i <= n; i++) {
            curr.push(i);
            backtrack(curr);
            curr.pop();
        }
    }
    
    let ans = [];
    backtrack([]);
    
    return ans;
};

