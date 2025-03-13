/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    // palindrome precompute to cache
    const cache = Array.from(
        { length: s.length }, 
        () => new Array(s.length).fill(false)
    );

    for (let left = s.length - 1; left >= 0; left--) {
        for (let right = left; right < s.length; right++) {
            if (s[left] === s[right] && (right - left <= 2 || cache[left + 1][right - 1])) {
                cache[left][right] = true;
            }
        }
    }

    // backtrack f(x)
    //      input: curr, idx
    //      if idx is === s.length add curr to ans array
    //      loop over the s using idx and call backtrack if the newly added substring is a palindrome
    const backtrack = (curr, idx) => {
        if(idx === s.length) return ans.push([...curr]);

        for(let i = idx; i < s.length; i++) {
            if(!cache[idx][i]) continue;

            curr.push(s.slice(idx, i + 1));
            backtrack(curr, i + 1);
            curr.pop();
        }
    }

    let ans = [];
    backtrack([], 0);

    return ans;
};