/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let max = nums[0];
    let previousMax = nums[0];

    let min = nums[0];
    let previousMin = nums[0];

    let total = nums[0];

    for(let i = 1; i < nums.length; i++) {
        previousMax = Math.max(nums[i], nums[i] + previousMax);
        max = Math.max(max, previousMax);

        previousMin = Math.min(nums[i], nums[i] + previousMin);
        min = Math.min(min, previousMin);

        total += nums[i];
    }

    if(max < 0) return max;

    min = total - min;
    return Math.max(max, min);
};