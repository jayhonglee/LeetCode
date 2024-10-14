/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
//     Sort nums
    nums.sort((a,b) => a - b);
    
//     Define variables
    let ans = 1;
    let x = nums[0];
    
//     Loop over and if diff goes over k, add + 1 to ans
    for(const num of nums) {
        if(Math.abs(num - x) > k) {
            console.log(Math.abs(num - x), num, x, ans);
            ans++;
            x = num;
        }
    }
    
    return ans;
};