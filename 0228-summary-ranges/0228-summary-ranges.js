/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ans = [];
    let start = 0;

    while(start < nums.length) {
        let end = start;

        while (end + 1 < nums.length && nums[end + 1] === nums[end] + 1) {
            end++;
        }

        if (start === end) ans.push(nums[start].toString()); 
        else ans.push(nums[start] + "->" + nums[end]);
        
        start = end + 1;
    }

    return ans;
};