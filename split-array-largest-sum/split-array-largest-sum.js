/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
//     Set range for what the largest sum array will be
    let left = Math.max(...nums);
    let right = nums.reduce((cum, num) => cum + num);
    
//     Do binary search within the range and if the largest sum array condition is met try a smaller number, if not try a bigger number.
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        let total = 0;
        let pieces = 1;
        
        for(const num of nums) {
            if(total + num > mid) {
                total = num;
                pieces++;
            } else total += num;
        }
        
        if(pieces > k) left = mid + 1;
        else right = mid;
    }
    
    return left;
};