/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // create ans array
    let ans = [];

    // sort the candidates array in increasing order
    candidates.sort();

    // create backtrack function (curr, arr, sum)
    const backtrack = (curr, start, sum) => {
        // if sum = target push to ans array
        if(sum === target) ans.push([...curr]);

        // if sum > target return
        if(sum > target) return;

        // iterate over arr and call backtrack function
        for(let index = start; index < candidates.length; index++) {
            const num = candidates[index];
            if(index > start && num === candidates[index - 1]) continue;

            curr.push(num);
            backtrack(
                curr, 
                index + 1, 
                sum + num
            );
            curr.pop();
        }
    }
    backtrack([], 0, 0);

    // return ans
    return ans;
};