/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // DP approach:
    if(s[0] === "0") return 0;

    let current = 0;
    let previous = 1;
    let secondPrevious = 0;

    for(let i = s.length - 1; i >= 0; i--) {
        current = 0;

        // single digit
        if(s[i] !== "0") {
            current += previous;

            // double digit
            if(Number(s[i] + s[i + 1]) < 27) {
                current += secondPrevious;
            }
        }

        secondPrevious = previous;
        previous = current;
    }

    return previous;

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