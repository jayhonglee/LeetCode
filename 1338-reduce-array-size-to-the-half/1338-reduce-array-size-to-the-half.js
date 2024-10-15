/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const target = arr.length / 2;
    let curr = arr.length;
    let hashmap = new Map();
    let ans = 0;
    
    for(let x of arr) {
        hashmap.set(x, (hashmap.get(x) || 0) + 1);
    }
    
    for(let x of Array.from(hashmap.values()).sort((a,b) => b - a)) {
        ans++;
        curr -= x;
        
        if(curr <= target) {
            break;
        }
    }
    
    return ans;
};