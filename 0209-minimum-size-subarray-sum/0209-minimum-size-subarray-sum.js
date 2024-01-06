/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, right = 0, curr = 0, length = 0;

    for(right; right < nums.length; right++) {
        curr += nums[right];
        while(curr >= target) {
          if(!length) {
                length = right - left + 1;
            } else {
                length = Math.min(length, right - left + 1);
            }
            curr -= nums[left];
            left++;
        }
    }

    // while(right < nums.length) {
    //     if(curr < target) {
    //         right++
    //         curr += nums[right];
    //     } else {
    //         if(!length) {
    //             length = right - left + 1;
    //         } else {
    //             length = Math.min(length, right - left + 1);
    //         }
    //         curr -= nums[left];
    //         left++;
    //     }

        // while(left > right) {
        //     right++
        //     curr += nums[right];
        // }
    // }

    return length;
};