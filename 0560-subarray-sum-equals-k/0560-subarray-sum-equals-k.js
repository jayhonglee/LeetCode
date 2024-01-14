/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let ans = 0, hashMap = new Map(), curr = 0;
    hashMap.set(0,1);
    
    for(const num of nums) {
        curr += num;
        if(hashMap.get(curr - k)) {
            ans += hashMap.get(curr - k);
        }

        hashMap.set(curr, (hashMap.get(curr) || 0) + 1);
    }
    
    
    return ans;
};