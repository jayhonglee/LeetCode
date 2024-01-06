/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let prefixSum = [nums[0]];
    
    for(let i=1; i<nums.length; i++) {
        prefixSum[i] = nums[i] + prefixSum[i-1];
    }    
    
    const ans = nums.map((x,i)=> {
        if(i-k<0 || i+k>nums.length-1) {
               return -1;
        }
        return Math.trunc((prefixSum[i+k] - prefixSum[i-k] + nums[i-k]) / (k * 2 + 1));
    })
        
    return ans;
};