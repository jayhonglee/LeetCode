/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAvg = average = i = 0;
    
    while(i < k) {
        average += nums[i];
        i++;
    }    
    average /= k;
    maxAvg = average;
    
    while(i < nums.length) {
        average = (average * k - nums[i - k] + nums[i])/k;
        maxAvg = Math.max(maxAvg, average);
        i++;
    }
    
    return maxAvg;
};