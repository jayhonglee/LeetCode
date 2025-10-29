/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    // Edge case
    if(s.length < 3) return [];

    // Iterate over s char by char
    const ans = [];
    let start = 0;

    for(let i = 1; i <= s.length; i++) {
        // For each char check if the current character matches the character stored.
        // If it is not a match, store the start idx and update the previous state.
        const curr = s[i];
        if(curr !== s[start]) {
            if(i - start >= 3) ans.push([start, i - 1]);
            start = i;
        }
    }

    return ans;
};