/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    const target = totalSum / 2;

    if(totalSum % 2 !== 0) return false;

    const sums = new Set();
    sums.add(0);

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const nextNums = [];
        for(const sum of sums) {
            if(sum + num === target) return true;
            nextNums.push(sum + num);
        }

        for(const num of nextNums) {
            sums.add(num);
        }
    }

    return false;
};