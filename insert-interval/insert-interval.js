var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a,b) => a[0] - b[0]);

    let ans = [];

    for(let i = 0; i < intervals.length; i++) {
        const curr = intervals[i];
        const prev = ans[ans.length - 1];

        if(ans.length && prev[1] >= curr[0]) {
            ans[ans.length - 1][1] = Math.max(curr[1], prev[1]);
        } else ans.push(curr);
    }

    return ans;
};