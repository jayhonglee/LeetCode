/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
//     create a dp function
//     input: index (this will be the index of the last element that is sti)
//     output: length of longest sti
    const dp = function(index) {
        if(index === 0) {
            memo[0] = 1;
            return memo[0];
        }
        
        if(memo[index] !== -1) {
            return memo[index];
        }
        
        let longestFound = 1;
        for(let i = 0; i < index; i++) {
            if(nums[i] < nums[index]) {
                longestFound = Math.max(longestFound, dp(i) + 1);
            }
        }
        
        memo[index] = longestFound;
        return memo[index];
    }
    
//     call dp for every index
    const memo = new Array(nums.length).fill(-1);
    for(let i = 0; i < nums.length; i++) {
        dp(i);
    }
    
//     return longest sti from the memo
    return Math.max(...memo);
};