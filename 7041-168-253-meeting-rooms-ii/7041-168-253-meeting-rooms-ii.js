/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(!intervals.length) return 0;
    if(intervals.length === 1) return 1;

    // sort the intervals using the start times
    intervals.sort((a,b) => a[0] - b[0]);

    // iterate over the intervals and merge any conflicting times and keep track of the maximum number of times merging happens
    let minHeap = [];
    minHeap.push(intervals[0]);

    let ans = 0;
    for(let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        minHeap.sort((a,b) => a[1] - b[1]);

        while(minHeap.length && minHeap[0][1] <= start) {
            minHeap.shift();
        }
        minHeap.push(intervals[i]);

        ans = Math.max(ans, minHeap.length);
    }

    return ans;
};