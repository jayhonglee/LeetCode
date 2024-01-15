/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let ans = 0, hashmap = new Map([[0,1]]), curr = 0;
    
    for(const num of nums) {
        curr += num % 2;
        
        
        ans += hashmap.get(curr - k) || 0;
        
        hashmap.set(curr, (hashmap.get(curr) || 0) + 1);
    }
    
    return ans;
    
};