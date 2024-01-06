/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let startValue = 1;
    let runningSum = [nums[0]];
    
    for(let i=1; i<nums.length; i++) {
        runningSum[i] = nums[i] + runningSum[i-1];
    }
    
    for(let i=0; i<runningSum.length; i++) {
        while(runningSum[i] + startValue < 1) {
            startValue++;
        }
    }
    
    return startValue;
};