/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    // Brute force - loop over all possible subarrays and find
    let ans = 0;

    for(let i = 0; i < nums.length; i++) {
        let min = Infinity, max = -Infinity;
        
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]);

        for(let j = i + 1; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
            max = Math.max(max, nums[j]);

            ans += max - min;
        }
    }

    return ans;
};