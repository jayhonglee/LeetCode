/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();
    
    for(let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        
        if(set.has(currentNum)) return true;
        
        set.add(currentNum);
        if(set.size > k) set.delete(nums[i - k]);
    }
    
    return false;
};