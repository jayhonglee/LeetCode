/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = [];
    
    const backtrack = (curr, sum, start) => {
        if(sum === target) return ans.push([...curr]);
        
        for(let i = start; i < candidates.length; i++) {
            if(sum <= target) {
                curr.push(candidates[i]);
                backtrack(curr, sum + candidates[i], i);
                curr.pop();
            }
        }
    }
    
    backtrack([], 0, 0);
    return ans;
};