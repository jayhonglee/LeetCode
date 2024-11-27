/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let dup = new Set();
    let ans = new Set();
    
    for(let i = 0; i < nums.length; i++) {
        const ithNum = nums[i];
        
        if(dup.has(ithNum)) continue;
        dup.add(ithNum);
        
        const target = 0 - ithNum;
        
        let seen = new Map();
        for(let j = i + 1; j < nums.length; j++) {
            const complement = target - nums[j];
            if(seen.has(complement)) {
                ans.add(JSON.stringify([ithNum, nums[j], complement].sort()));
            }
            
            seen.set(nums[j], j);
        }
    }
    
    return Array.from(ans, JSON.parse);
};