/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = (index) => {
        if(index === 0) return nums[index];
        if(index === 1) return Math.max(nums[index], nums[index - 1]);
        
        if(memo[index] !== -1) return memo[index];
        memo[index] = Math.max(dp(index - 1), dp(index - 2) + nums[index]);
        
        return memo[index];
    }
    
    const memo = new Array(nums.length).fill(-1);
    return dp(nums.length - 1);
};