class Solution {
    public int connectSticks(int[] sticks) {
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        
        for(int stick : sticks) {
            heap.add(stick);
        }
        
        int ans = 0;
        int one, two;
        
        while(heap.size() > 1) {
            one = heap.remove();
            two = heap.remove();
            heap.add(one + two);
            ans += one + two;
        }
        
        return ans;
    }
}