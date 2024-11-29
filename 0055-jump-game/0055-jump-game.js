/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const backtrack = function(index) {
        if(index >= nums.length - 1) return true;
        
        if(memo[index] === "bad") return false;
        
        for(let i = 1; i <= nums[index]; i++) {
            if(backtrack(Math.min(index + i, nums.length - 1)) === true) return true;
        }
        memo[index] = "bad";
        
        return false;
    }
    
    const memo = new Array(nums.length);
    return backtrack(0);
};