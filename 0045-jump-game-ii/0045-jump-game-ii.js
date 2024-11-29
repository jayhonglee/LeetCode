/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let memo = new Array(nums.length).fill(Infinity);
    memo[nums.length - 1] = 0;
    
    for(let index = nums.length - 2; index >= 0; index--) {      
        for(let i = 1; i <= nums[index]; i++) {
            memo[index] = Math.min(memo[Math.min(index + i, nums.length - 1)] + 1, memo[index]);
        }
    }

    console.log(memo);
    return memo[0];
};