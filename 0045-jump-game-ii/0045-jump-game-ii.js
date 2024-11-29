/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
//     dp top down:
//     let memo = new Array(nums.length).fill(Infinity);
//     memo[nums.length - 1] = 0;
    
//     for(let index = nums.length - 2; index >= 0; index--) {      
//         for(let i = 1; i <= nums[index]; i++) {
//             memo[index] = Math.min(memo[Math.min(index + i, nums.length - 1)] + 1, memo[index]);
//         }
//     }

//     return memo[0];
    
//     greedy:
    let currEnd = 0;
    let farthest = 0;
    let ans = 0;
    for (let index = 0; index < nums.length - 1; index++) {
//         farthest at the current index can go
        farthest = Math.max(farthest, index + nums[index]);
        
//         if we have reached the fathest we could have gone with minimum moves add + 1 step and update currEnd.
        if(index === currEnd) {
            ans++;
            currEnd = farthest;
        }
    }
    
    return ans;
};