/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let ans = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        const current = nums[i];
        let tempMax = Math.max(current, Math.max(maxSoFar * current, minSoFar * current));
        minSoFar = Math.min(current, Math.min(maxSoFar * current, minSoFar * current));
        
        maxSoFar = tempMax;
        ans = Math.max(ans, maxSoFar);
        console.log(current, minSoFar, maxSoFar, ans);
    }
    
    return ans;
};