/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
//     function
//     input: i (index of text1), j (index of text2)
//     output: length of the longest lcs found 
    const lcs = function(i , j) {
//         reached the end of a text
        if(i >= text1.length || j >= text2.length) return 0;
        
//         memo has computed value
        if(memo[i][j] !== -1) return memo[i][j];
        
        if(text1[i] === text2[j]) return 1 + lcs(i + 1, j + 1);
        else {
            memo[i][j] = Math.max(lcs(i, j + 1), lcs(i + 1, j));
            return memo[i][j];
        }
        
//         no lcs found
        return 0;
    }
    
    const memo = [];
    for(let i = 0; i < text1.length; i++) {
        memo.push(new Array(text2.length).fill(-1));
    }
    return lcs(0, 0);
};