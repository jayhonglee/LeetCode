/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
//     create a dp function
//     input: index (this will be the index of the last element that is sti)
//     output: length of longest sti
    const dp = function(index) {        
        if(memo[index] !== -1) return memo[index];
        
        let ans = 1;
        for(let i = 0; i < index; i++) {
            if(nums[i] < nums[index]) {
                ans = Math.max(ans, dp(i) + 1);
            }
        }
        
        memo[index] = ans;
        return memo[index];
    }
    
//     call dp for every index
    let memo = new Array(nums.length).fill(-1);
    let ans = 0;
    for(let i = 0; i < nums.length; i++) {
        ans = Math.max(ans, dp(i));
    }
    
    return ans;
};