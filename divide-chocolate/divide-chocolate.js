/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function(sweetness, k) {
//     set left and right as minimum possible and maximum possible
    let left = Math.min(...sweetness);
    let right = Math.floor(sweetness.reduce((accum, curr) => accum + curr)/(k + 1));
    let ans = -1;
    
//     do binary search
    while(left < right) {
        let mid = Math.floor((left + right) / 2) + 1;
        let sum = 0;
        let pieces = 0;
        for(const sweet of sweetness) {
            sum += sweet;
            
            if(sum >= mid) {
                sum = 0;
                ++pieces;
            }
        }
        
        if(pieces >= k + 1) {
            left = mid;
        } else {
            right = mid - 1;
        }
        
        ans = right;
    }
    
    return ans;
};