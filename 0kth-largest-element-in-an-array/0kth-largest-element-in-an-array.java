class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        int ans = 0;
        
        for(int i = 0; i < nums.length; i++) {
            pq.add(nums[i]);
        }
        for(int i = 0; i < k; i++) {
            ans = pq.poll();
        }
        
        return ans;
    }
}