/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let prefixSum = [0], ans = 0;
    
    for(let i = 1; i < gain.length + 1; i++) {
        prefixSum[i] = prefixSum[i-1] + gain[i-1];
        ans = Math.max(ans, prefixSum[i]);
    }
    
    return ans;
};