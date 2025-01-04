/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // Create an array that represents each i to represent the longest increasing subsequence that ends at nums[i]
    let memo = new Array(nums.length).fill(1);

    // loop over each num and from memo up to i - 1, if the num is smaller than current, update memo 
    for(let i = 1; i < nums.length; i++) {
        const curr = nums[i];
        for(let j = 0; j < i; j++) {
            const prev = nums[j];
            if(prev < curr) memo[i] = Math.max(memo[i], memo[j] + 1);
        }
    }

    return Math.max(...memo);
};