/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let hashmap = new Map(), ans = -1;
    
    for(const num of arr) {
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }
    
    hashmap.forEach((value, key)=> {
        if(value === key) {
            ans = Math.max(ans, key);
        }
    })
    
    return ans;
};