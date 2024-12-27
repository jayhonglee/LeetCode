/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const backtrack = (curr) => {
        if(curr.length === nums.length) {
            ans.push([...curr]);
            return;
        }
        
        for(const num of nums) {
            if(used.has(num)) continue;
            used.add(num);
            
            curr.push(num);
            backtrack(curr);
            curr.pop();
            
            used.delete(num);
        }
    }
    
    let ans = [];
    let currentArray = [];
    let used = new Set();
    backtrack(currentArray);
    
    return ans;
};