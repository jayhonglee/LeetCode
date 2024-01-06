/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    let ans = [];
    
    while(i <= j) {
        if(Math.abs(nums[i]) > Math.abs(nums[j])) {
            ans.push(nums[i]**2);
            i++;
        } else {
            ans.push(nums[j]**2);
            j--;
        }
    }

  return ans.reverse();  
};