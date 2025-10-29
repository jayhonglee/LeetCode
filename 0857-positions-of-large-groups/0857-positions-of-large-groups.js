/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    // Edge case
    if(s.length === 1) return [];

    // Iterate over s char by char
    let length = 1;
    let interval = [0];
    let prev = s[0];
    let ans = [];
    for(let i = 1; i <= s.length; i++) {
        // For each char check if the current character matches the character stored.
        // If it is not a match, store the start idx and update the previous state.
        const curr = s[i];
        if(curr !== prev) {
            interval.push(i - 1);
            if(interval[1] - interval[0] >= 2) ans.push(interval);
            interval = [i];
            prev = curr;
        }
    }

    return ans;
};