/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);

    for(let i = 1; i < intervals.length; i++) {
        const prev = intervals[i - 1];
        const curr = intervals[i];

        if(prev[1] >= curr[0]) {
            const merged = [prev[0], Math.max(prev[1], curr[1])];
            intervals.splice(i - 1, 2, merged); 
            i--;
        }
    }

    return intervals;
};