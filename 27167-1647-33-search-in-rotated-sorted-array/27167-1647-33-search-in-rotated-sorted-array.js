/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // find pivot
    let left = 0, right = nums.length - 1;
    let pivot = -1;
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if(nums[mid] >= nums[0]) left = mid + 1;
        else right = mid;
    }
    pivot = left;

    // run binary search on both 
    const bs = (start, end) => {
        left = start, right = end;

        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            const curr = nums[mid];
            
            if(curr === target) return mid;
            if(curr > target) right = mid - 1;
            else left = mid + 1;
        }

        return -1;
    }

    const leftBS = bs(0, pivot - 1);
    if(leftBS !== -1) return leftBS;
    return bs(pivot, nums.length - 1); 
};