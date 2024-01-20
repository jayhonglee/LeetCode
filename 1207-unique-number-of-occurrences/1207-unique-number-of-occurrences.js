/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hashmap = new Map(), hashset = new Set();
    
    for(const num of arr) {
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }
    
    for(const [key,value] of hashmap) {
        hashset.add(value);
    }

    return hashmap.size === hashset.size;
};