/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 1) return nums[0];

    // find the pivot
    let left = 0, right = nums.length - 1;
    const lastElement = nums[nums.length - 1];  

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);     
        const midValue = nums[mid];         
        const prevValue = nums[mid - 1];

        if(midValue < prevValue) {
            left = mid;
            break;
        }

        if(midValue < lastElement) right = mid - 1;
        else left = mid + 1;
    }

    // return the pivot
    return nums[left];
};