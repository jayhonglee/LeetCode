/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let hashmap = new Map(), ans = -1;
    
    for(num of nums) {
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }

    for([key, value] of hashmap) {
        if(value === 1) {
            ans = Math.max(ans, key);
        }
    }
    
    return ans;
};