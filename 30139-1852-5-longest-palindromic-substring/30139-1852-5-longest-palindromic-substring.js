/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let ans = [Infinity, -Infinity];
    for(let j = 0; j < s.length; j++) {
        let left = right = j;
        
        while(s[left] && s[right] && s[left] === s[right]) {
            if(right - left >= ans[1] - ans[0]) {
                ans[0] = left;
                ans[1] = right;
            }

            left = left - 1;
            right = right + 1;
        };

        if(s[j] === s[j + 1]) {
            left = j;
            right = j + 1;

            while(s[left] && s[right] && s[left] === s[right]) {
                if(right - left >= ans[1] - ans[0]) {
                    ans[0] = left;
                    ans[1] = right;
                }

                left = left - 1;
                right = right + 1;
            };
        }
    }

    return s.slice(ans[0], ans[1] + 1);
};