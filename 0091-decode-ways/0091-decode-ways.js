/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // DP approach:
    if(s[0] === "0") return 0;

    const cache = new Array(s.length + 1).fill(0);
    cache[s.length] = 1;
    if(s[s.length - 1] !== "0") cache[s.length - 1] = 1;

    for(let i = s.length - 2; i >= 0; i--) {
        // single digit
        if(s[i] !== "0") {
            cache[i] = cache[i + 1];

            // double digit
            if(Number(s[i] + s[i + 1]) < 27) {
                cache[i] += cache[i + 2];
            }
        }
    }

    return cache[0];

    // Brute force approach:
    // const length = s.length;
    // if(s[0] === "0") return 0;    

    // const backtrack = (size) => {
    //     if(size === length) {
    //         ans++;
    //         return;
    //     }

    //     // get current character & current appended with next character
    //     const current = Number(s[size]);
    //     const currentPlusNext = s[size + 1] && Number(s[size] + s[size + 1]);

    //     // single digit
    //     if(current !== 0) {
    //         backtrack(size + 1);
    //     };
         
    //     // double digit
    //     if(currentPlusNext > 9 && currentPlusNext < 27) {
    //         backtrack(size + 2);
    //     }
    // }

    // let ans = 0;
    // backtrack(0);

    // // return # of different ways 
    // return ans;
};