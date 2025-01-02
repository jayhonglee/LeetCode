/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midNum = nums[mid];

        if(midNum === target) return mid;

        if(midNum > target) right = mid - 1;
        else if (midNum < target) left = mid + 1;
    }

    return left;
};