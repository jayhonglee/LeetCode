/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashmap = new Map(), ans = false;
    
    for(const num of nums) {
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }
    
    for(const value of hashmap.values()) {
        if (value > 1) {
            ans = true;
        }
    }
    
    return ans;
};