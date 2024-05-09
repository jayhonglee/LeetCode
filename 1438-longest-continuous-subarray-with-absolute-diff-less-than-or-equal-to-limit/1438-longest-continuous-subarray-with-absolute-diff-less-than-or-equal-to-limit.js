/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    // declare variables
    let increasing = [], decreasing = [], ans = 0, left = 0;
    
    // loop over the nums array
    for(let right = 0; right < nums.length; right++) {

    // store the num into each queue
    // if the monotonic property is broken, delete the queue until it is correct
    while(increasing[increasing.length - 1] > nums[right]) {
        increasing.pop();
    }
    while(decreasing[decreasing.length - 1] < nums[right]) {
        decreasing.pop();
    }
        
    increasing.push(nums[right]);
    decreasing.push(nums[right]);
        
        // maintain window property
        while (decreasing[0] - increasing[0] > limit) {
            if (nums[left] == decreasing[0]) {
                decreasing.shift();
            }
            if (nums[left] == increasing[0]) {
                increasing.shift();
            }
            left++;
        }
        
        ans = Math.max(ans, right - left + 1);
    }
    
    return ans;
};