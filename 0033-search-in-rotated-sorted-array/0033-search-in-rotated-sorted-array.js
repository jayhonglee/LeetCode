/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const binarySearch = function(left, right) {
        while(left <= right) {
            const mid = Math.floor((left + right) / 2);

            if(nums[mid] === target) return mid;

            if(nums[mid] > target) right = mid - 1;
            else left = mid + 1;
        }

        return -1;
    }
    
//     edge case
    // if(nums[0] < nums[nums.length - 1]) return binarySearch(0, nums.length - 1);
    if(nums.length === 1 && nums[0] === target) return 0;

    // 51234 45123 34512 23451
//     find pivot point
    let pivot = -1;
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        if(nums[mid] > nums[mid + 1]) {
            pivot = mid + 1;
            break;
        }
        if(nums[mid - 1] > nums[mid]) {
            pivot = mid;
            break;
        }

        if(nums[mid] < nums[0]) right = mid - 1;
        else left = mid + 1;
    }
    
//     bs for left array and right array
    let answer = binarySearch(0, pivot - 1);
    
    if (answer != -1) return answer;
    
    return binarySearch(pivot, nums.length - 1);
};