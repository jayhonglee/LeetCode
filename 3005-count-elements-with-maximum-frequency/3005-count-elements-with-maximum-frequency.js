/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let hashmap = new Map(), max = 0, ans = 0;
    
    for(const num of nums) {
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
        max = Math.max(max, hashmap.get(num));
    }
    
    hashmap.forEach((value, key) => {
        if(value === max) {
            ans += value;
        }
    })    
    
    return ans;
};