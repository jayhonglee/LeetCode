/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let hashset = new Set(), left = 0, ans = 0, curr = 0;
    
    for(let right = 0; right < nums.length; right++) {
        while(hashset.has(nums[right])) {
            hashset.delete(nums[left]);
            curr -= nums[left];
            left++;
        }
        
        hashset.add(nums[right]);
        curr += nums[right];
        ans = Math.max(ans, curr);
    }
    
    return ans;
};