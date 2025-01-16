/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    let seen = new Set();

    nums.sort();

    const toSortedStr = (x, y, z) => {
        return [x,y,z].sort().join(",");
    }

    for(let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const newTarget = 0 - curr;
        const set = new Set();

        if(curr === nums[i-1]) continue;

        for(let j = 0; j < nums.length; j++) {
            if(j === i) continue;
            const curr = nums[j];

            if(set.has(newTarget - curr) && !seen.has(toSortedStr(nums[i], nums[j], newTarget - curr))) {
                ans.push([nums[i], nums[j], newTarget - curr]);
                seen.add(toSortedStr(nums[i], nums[j], newTarget - curr));
            }
            set.add(curr);
        }
    }

    return ans;
};