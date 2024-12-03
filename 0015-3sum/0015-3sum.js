/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    let ans = new Set();
    
    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] === nums[i - 1]) continue;
        
        const firstNum = nums[i];
        const targets = -firstNum;
        const set = new Set();
        
        for(let j = i + 1; j < nums.length; j++) {
            const secondNum = nums[j];
            const thirdNum = targets - secondNum;
            if(set.has(thirdNum)) ans.add(firstNum + " " + secondNum + " " + thirdNum);
            
            set.add(secondNum);
        }
    }
    
    
    return Array.from(ans).map(triplet => triplet.split(" ").map(num => +num));
};