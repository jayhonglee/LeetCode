/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const backtrack = (curr, acc, idx) => {
        if(acc === target) {
            ans.push([...curr]);
            return;
        }
        if(acc > target) return;

        for(let i = idx; i < candidates.length; i++) {
            curr.push(candidates[i]);

            backtrack(curr, acc + candidates[i], i);

            curr.pop();
        }
    }

    let ans = [];
    backtrack([], 0, 0);

    return ans;
};