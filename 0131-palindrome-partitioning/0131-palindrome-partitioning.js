/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    // isPalindrome f(x)
    const isPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;

        while(left < right) {
            const leftChar = str[left];
            const rightChar = str[right];

            if(leftChar !== rightChar) return false;

            left++;
            right--;
        }

        return true;
    }

    // backtrack f(x)
    //      input: curr, idx
    //      if idx is === s.length add curr to ans array
    //      loop over the s using idx and call backtrack if the newly added substring is a palindrome
    const backtrack = (curr, idx) => {
        if(idx === s.length) ans.push([...curr]);

        let accStr = "";
        for(let i = idx; i < s.length; i++) {
            const currChar = s[i];
            accStr += currChar;

            if(isPalindrome(accStr)) backtrack([...curr, accStr], i + 1);
        }
    }

    let ans = [];
    backtrack([], 0);

    return ans;
};