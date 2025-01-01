/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const backtrack = (curr, open, close) => {
        if(curr.length === n * 2 && open === close) {
            ans.push(curr);
            return;
        }

        if(curr.length > n * 2 || close > open) return;

        for(const parentheses of ["(", ")"]) {
            const isLeftPrt = parentheses === "(";
            const isRightPrt = parentheses === ")";

            backtrack(curr + parentheses, isLeftPrt ? open + 1 : open, isRightPrt ? close + 1 : close);
        }
    }

    let ans = [];
    backtrack("", 0, 0);

    return ans;
};