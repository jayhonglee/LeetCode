class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        // edge case
        if(position.length < 2) return position.length;

        // sort each car by their position
        int ans = 0;
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a,b) -> b[0] - a[0]);

        for(int i = 0; i < position.length; i++) {
            minHeap.add(new int[]{position[i], speed[i]});
        }

        // loop over each car, if the current car is going to be caught up by the previous car, update it so that the fleet is of same as previous and if not, update fleet to be previous + 1.
        double prevTimeLeft = 0;

        while(!minHeap.isEmpty()) {
            int[] curr = minHeap.poll();
            int currPos = curr[0], currSpeed = curr[1];
            int currDistance = target - currPos;

            double currTimeLeft = (double) currDistance / currSpeed;

            if(prevTimeLeft < currTimeLeft) {
                ans++;
                prevTimeLeft = currTimeLeft;
            }
        }


        // return final fleet of cars
        return ans;
    }
}