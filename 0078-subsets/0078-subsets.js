/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];
    
    const backtrack = (curr, newIndex) => {        
        ans.push([...curr]);
        
        for(let i = newIndex; i < nums.length; i++) {
            curr.push(nums[i]);
            backtrack(curr, i + 1);
            curr.pop();
        }
    }
    
    backtrack([],0);
    return ans;
};