/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);

    let ans = [];
    for(let i = 0; i < intervals.length; i++) {
        const prev = ans[ans.length - 1];
        const curr = intervals[i];

        if(ans.length && prev[1] >= curr[0]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else ans.push(curr);
    }

    return ans;
};