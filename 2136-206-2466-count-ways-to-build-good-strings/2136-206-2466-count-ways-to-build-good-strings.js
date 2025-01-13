/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    // String length: [low, high]
    // Append '0' zero times || '1' one times
    // Return the number of different good strings that can be made (return % 10**9 + 7)

    // Brute force:
    // // Set variables
    // let ans = new Set();
    // let options = ["0".repeat(zero), "1".repeat(one)];

    // // Create backtrack function
    // // Input: String
    // // Output: Void
    // const backtrack = (curr) => {
    //     if(curr.length >= low && curr.length <= high) ans.add(curr);
    //     if(curr.length > high) return;

    //     for(const option of options) {
    //         backtrack(curr + option);
    //     }
    // }
    // backtrack("");

    // // Return the number of possible unique strings that meet the requirements
    // return ans.size % (10**9 + 7);

    // Optimal:
    // Set variables
    let memo = new Array(high + 1).fill(0);
    memo[0] = 1;

    // Iterate from 0 to high and store the number of possible strings
    for(let i = 1; i <= high; i++) {
        const zeroBack = memo[i - zero];
        const oneBack = memo[i - one];

        if(zeroBack !== undefined) memo[i] = (memo[i] + zeroBack) % (10**9 + 7);
        if(oneBack !== undefined) memo[i] = (memo[i] + oneBack) % (10**9 + 7);
    }

    // From the memo, add up all the numbers of possible strings [low, high] and return it.
    let ans = 0;
    for(let i = low; i <= high; i++) {
        ans = (memo[i] + ans) % (10**9 + 7);
    }

    return ans;
};