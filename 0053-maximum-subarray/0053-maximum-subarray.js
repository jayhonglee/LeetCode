/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let previousMax = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        previousMax = Math.max(nums[i], previousMax + nums[i]);
        ans = Math.max(previousMax, ans);
    }
    
    return ans;
};