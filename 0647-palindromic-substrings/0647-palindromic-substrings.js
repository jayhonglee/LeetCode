/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const n = s.length;
    const cache = Array.from({ length: s.length }, () => new Array(s.length).fill(false));
    let ans = 0;
    
    for(let left = n - 1; left >= 0; left--) {
        for(let right = left; right < n; right++) {
            if(
                s[left] === s[right] && 
                (right - left <= 2 || cache[left + 1][right - 1])
            ) {
                cache[left][right] = true;
                ans++;
            }
        }
    }

    return ans;
};