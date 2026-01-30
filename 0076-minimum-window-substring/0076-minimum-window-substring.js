/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // Intuition)
    // - Sliding window (right pointer expands window, left pointer shrinks window)
    // - (Condition) Window expands if window not valid
    // - (Condition) Window shrinks while window valid
    // - Validation using need counter (hashmap) & needMap
    // - Only update needMap if the need counter = 0
    // - Ans [number, number] to keep shortest substring indexes

    // Define need counter & needMap & ans
    let need = t.length;
    let needMap = new Map();
    let ans = [-1, -1];

    for(const char of t) needMap.set(char, (needMap.get(char) || 0) + 1);

    let left = 0;

    // Right pointer loop over the entire s
    for(let right = 0; right < s.length; right++) {
        const rightChar = s[right];

        // Need counter update logic & needMap
        if(needMap.has(rightChar)) {
            needMap.set(rightChar, needMap.get(rightChar) - 1);
            if(needMap.get(rightChar) >= 0) need--;
        }

        // While window valid, left pointer shrinks window
        while(need === 0) {
            // Update ans
            if(ans[0] === -1 || (right - left + 1) < (ans[1] - ans[0] + 1)) {
                ans = [left, right];
            }

            // Update need counter & needMap
            const leftChar = s[left];
            if(needMap.has(leftChar)) {
                needMap.set(leftChar, needMap.get(leftChar) + 1);
                if(needMap.get(leftChar) > 0) need++;
            }

            left++;
        }
    }

    // Return ans substring (If ans is invalid, return empty string)
    return ans[0] === -1 ? "" : s.slice(ans[0], ans[1] + 1);
};