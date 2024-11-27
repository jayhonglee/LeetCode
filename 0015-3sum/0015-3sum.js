/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
//     sort the array
//     basically for every num of nums do two sum apporach to find num pairs that will be added with current num to add up to 0. keep a seen set to skip same nums.
    
    nums.sort();
    const seenI = new Set();
    let ans = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(seenI.has(nums[i])) continue;
        seenI.add(nums[i]);
        
        const targetSum = 0 - nums[i];
        const map = new Map();
        const seenJ = new Set();
        for(let j = i + 1; j < nums.length; j++) {
            if(map.has(targetSum - nums[j])) seenJ.add(`${nums[i]},${targetSum - nums[j]},${nums[j]}`);
            
            if(!map.has(nums[j])) map.set(nums[j], 0);
            map.set(nums[j], map.get(nums[j]) + 1);
        }
        
        seenJ.forEach((seen) => {
            ans.push(seen.split(",").map((str) => +str));
        })
    }
    
    return ans;
};