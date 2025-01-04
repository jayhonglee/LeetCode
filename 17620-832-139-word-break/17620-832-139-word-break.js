/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // create a memo array that stores if up to the each index of the s string can be created
    const memo = new Array(s.length + 1).fill(false);
    memo[0] = true;

    // loop over the memo array and if it could have been created, loop over the other indices and mark memo as createable or not
    for(let i = 0; i < memo.length; i++) {
        if(memo[i] === false) continue;

        for(let j = i + 1; j < memo.length; j++) {
            if(wordDict.includes(s.slice(i, j))) memo[j] = true;
        }
    }

    // check if the index of s.length is true in memo (meaning the entire s could have been made)
    return memo[s.length];
};