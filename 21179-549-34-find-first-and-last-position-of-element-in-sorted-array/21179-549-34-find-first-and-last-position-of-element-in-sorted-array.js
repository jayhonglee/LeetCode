/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!nums.length) return [-1, -1];

    // find number that is the biggest number that is smaller than the target using bs (return index)
    let left = 0, right = nums.length - 1;

    let leftBound = -1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const curr = nums[mid];
        const next = nums[mid + 1];

        leftBound = mid;

        if(next === target && curr !== target) break;
        else if(curr < target) left = mid + 1;
        else if (curr >= target) right = mid - 1;
    }

    // find number that is the smallest number that is bigger than the target using bs (return index)
    left = 0, right = nums.length - 1;

    let rightBound = -1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const curr = nums[mid];
        const prev = nums[mid - 1];

        rightBound = mid;

        if(prev === target && curr !== target) break;
        else if(curr <= target) left = mid + 1;
        else if (curr > target) right = mid - 1;
    }

    if(nums[leftBound] !== target) leftBound += 1;
    if(nums[rightBound] !== target) rightBound -= 1;

    if(nums[leftBound] !== target || nums[rightBound] !== target) return [-1, -1];

    return [leftBound, rightBound];
};