/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let prefix = [nums[0]], ans = 0;
    
    for(let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i-1] + nums[i];
    }
    
    for(let i=0; i < nums.length - 1; i++) {
        let valid = prefix[i] >= prefix[nums.length -1] - prefix[i];
        if(valid) ans++;
    }
    
    return ans;
};