/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 1) return nums[0];
    
//     If first number < last number then its sorted
    if(nums[0] < nums[nums.length - 1]) return nums[0];
    
//     do binary search and if mid is greater than left, left = mid + 1 else right = mid - 1
    let left = 0;
    let right = nums.length - 1;
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        const midNum = nums[mid];
        
        console.log(mid, midNum)
        
        if(nums[mid] > nums[mid + 1]) return nums[mid + 1];
        else if(nums[mid] < nums[mid - 1]) return nums[mid];
        
        if(midNum > nums[left]) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;
};