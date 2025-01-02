/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let previousMax = nums[0];

    for(let i = 1; i < nums.length; i++) {
        const curr = Math.max(previousMax + nums[i], nums[i]);
        ans = Math.max(ans, curr);

        previousMax = curr;   
    }

    return ans;
};