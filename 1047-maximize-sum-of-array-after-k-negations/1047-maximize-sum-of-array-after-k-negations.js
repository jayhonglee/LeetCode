/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    // Optimal Solution
    // Method: Flip as many negatives then if the k is still odd, flip the smallest number
    nums.sort((a,b) => a-b);

    for(let i = 0; i < nums.length; i++) {
        if(k > 0 && nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
    }

    if(k > 0 && k % 2 === 1) {
        const min = Math.min(...nums);
        const idx = nums.indexOf(min);
        nums[idx] = -nums[idx];
    }

    return nums.reduce((acc, curr) => acc + curr, 0);

    // Non-Optimal Solution
    // Method: Sort the nums array in ascending order and flip the smallest value
    // Time: O(k * nlog(n)) & Space: O(1)
    // while(k > 0) {
    //     nums.sort((a,b) => a-b);
    //     nums[0] = -nums[0];
    //     k--;
    // }

    // return nums.reduce((acc, curr) => acc + curr, 0);
};