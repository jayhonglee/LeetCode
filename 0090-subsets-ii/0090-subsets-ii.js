/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let ans = [];

    const backtrack = (curr, i) => {
        ans.push([...curr]);

        for(let idx = i; idx < nums.length; idx++) { 
            if (idx > i && nums[idx] === nums[idx - 1]) continue;

            backtrack([...curr, nums[idx]], idx + 1);
        }
    }

    nums.sort();
    backtrack([], 0);

    return ans;
};