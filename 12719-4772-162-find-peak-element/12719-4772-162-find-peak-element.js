/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // set left and right to start and end
    // bianary search
    // find middle element
    // check if middle element is the peak
    // if not, continue searching in the neighbor that is greater than middle element

    let left = 0, right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        const current = nums[mid];
        const prev = nums[mid - 1] === undefined ? -Infinity : nums[mid - 1];
        const next = nums[mid + 1] === undefined ? - Infinity : nums[mid + 1];;

        if(current > prev && current > next) return mid;

        if(next > current) left = mid + 1;
        else right = mid - 1;
    }
};