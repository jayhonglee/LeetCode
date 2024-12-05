/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    
    let ans = 0;
    for(const num of set) {
        if(!set.has(num - 1)) {
            let count = 1;
            let curr = num;
            while(set.has(curr + 1)) {
                count++;
                curr++;
            }
            ans = Math.max(count, ans);
        }
    }
    
    return ans;
};