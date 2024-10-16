/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
    
    const backtrack = (current) => {
        if(current.length === nums.length) return ans.push([...current]);
        
        for(const num of nums) {
            if(current.includes(num)) continue;
            
            current.push(num);
            backtrack(current);
            current.pop();
        }
    }
    
    backtrack([]);
    return ans;
};