class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        int ans = 0;

        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        int prevEnd = intervals[0][1];

        for(int i = 1; i < intervals.length; i++) {
            int[] interval = intervals[i];
            int start = interval[0], end = interval[1];
            
            if(prevEnd > start) {
                ans++;
                prevEnd = Math.min(prevEnd, end);
            } else {
                prevEnd = end;
            }
            
        }

        return ans;
    }
}