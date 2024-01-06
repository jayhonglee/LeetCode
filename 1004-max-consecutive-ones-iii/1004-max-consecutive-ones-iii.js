/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = max = curr = zeros = 0;
    
    for(let right = 0; right < nums.length; right++) {    
        if(nums[right] === 0) {
            zeros++;
        } 
        
        curr++;
        
        while(zeros > k) {
            curr--;
            if(nums[left] === 0) {
                zeros--;
            }
            left++;
        }
        
        max = Math.max(max, curr);
    }
    
    return max;
};