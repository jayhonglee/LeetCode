/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const hashmap = new Map([[0,1]]);
    let acc = 0;
    let ans = 0;

    // Iterate over the nums
    for(const num of nums) {
        // Find how many k - Cum subarrays before so far
        acc += num;
        ans += hashmap.get(acc - k) || 0;
        hashmap.set(acc, (hashmap.get(acc) ?? 0) + 1);
    }

    return ans;
};