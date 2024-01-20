/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let hashmap = new Map(), left = 0, ans = 0;
    
    for(let right = 0; right < nums.length; right++) {
        let value = (hashmap.get(nums[right]) || 0) + 1;
        while(value > k) {
            hashmap.set(nums[left], hashmap.get(nums[left]) - 1);
            left++;
            value = (hashmap.get(nums[right]) || 0) + 1;
        }
        hashmap.set(nums[right], value);
        
        ans = Math.max(ans, right - left + 1);
    }
    
    return ans;
};