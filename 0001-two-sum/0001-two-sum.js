/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        let lookFor = target - nums[i];
        
        if(hashmap.has(lookFor)) {
            return [hashmap.get(lookFor), i];
        }
        
        hashmap.set(nums[i], i);
    }
};