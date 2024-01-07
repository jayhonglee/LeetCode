/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let ans = -1, prefix = [nums[0]];
    
    for(let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i-1] + nums[i];
    }
    
    let left, right;
    
    for(let i = 0; i < prefix.length; i++) {
        if(i-1 < 0) {
            left = 0;
        } else {
            left = prefix[i-1];
        }
        
        if(i+1 > prefix.length - 1) {
            right = 0;
        } else {
            right = prefix[prefix.length-1] - prefix[i];
        }
        
        if(left == right) {
            return ans = i;
        }        
    }
    
    return ans;
};