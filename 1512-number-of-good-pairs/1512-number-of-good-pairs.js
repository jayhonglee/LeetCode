/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let hashmap = new Map(), ans = 0;
    
    for(const num of nums) {
        if(hashmap.has(num)) {
            ans += hashmap.get(num);
        }
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }
    
    return ans;
};