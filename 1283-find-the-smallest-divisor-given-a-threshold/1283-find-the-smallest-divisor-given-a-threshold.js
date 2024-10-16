/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let left = 1;
    let right = Math.max(...nums);
    
    const valid = (div) => {
        let cum = 0;
        
        for(const num of nums) {
            cum += Math.ceil(num / div);
        }
        
        return cum <= threshold;
    }
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if(valid(mid)) right = mid - 1;
        else left = mid + 1;
    }
    
    return left;
};