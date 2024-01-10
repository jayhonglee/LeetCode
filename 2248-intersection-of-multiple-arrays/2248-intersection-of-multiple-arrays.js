/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let ans = [];
    let hashmap = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums[i].length; j++) {
            hashmap.set(nums[i][j], (hashmap.get(nums[i][j]) || 0) + 1);
        }
    }

    hashmap.forEach((value, key) => {
        if(value === nums.length) {
            ans.push(key);
        }
    })

    ans.sort((a,b) => a - b);
    return ans;
};