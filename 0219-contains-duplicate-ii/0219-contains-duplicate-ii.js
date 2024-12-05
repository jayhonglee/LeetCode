/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hashmap = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        
        if(hashmap.has(currentNum)) {
            const notFound = hashmap.get(currentNum).every((num) => {
                return Math.abs(num - i) > k
            })
            if(!notFound) return true;
        }
        
        if(!hashmap.has(currentNum)) hashmap.set(currentNum, []);
        hashmap.get(currentNum).push(i);
    }
    
    return false;
};