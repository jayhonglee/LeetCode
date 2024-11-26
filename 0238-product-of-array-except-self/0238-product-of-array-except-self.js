/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = [];
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) prefix[0] = nums[i];
        else {
            prefix[i] = prefix[i - 1] * nums[i];
        }
    }
    
    let suffix = [];
    for(let i = nums.length - 1; i >= 0; i--) {
        if(i === nums.length - 1) suffix[i] = nums[i];
        else {
            suffix[i] = suffix[i + 1] * nums[i];
        }        
    }
    
    let ans = [];
    for(let i = 0; i < nums.length; i++) {
        const lower = prefix[i - 1] !== undefined ? prefix[i - 1] : 1;
        const upper = suffix[i + 1] !== undefined ? suffix[i + 1] : 1;
        
        ans.push(lower * upper);
    }
    
    return ans;
};