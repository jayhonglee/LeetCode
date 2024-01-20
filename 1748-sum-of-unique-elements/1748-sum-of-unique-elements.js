/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let hashmap = new Map(), ans = 0;
    
    for(const num of nums) {
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }

    hashmap.forEach((value, key) => {
        if(value === 1) {
            ans += key;
        }
    })
    
    return ans;
};