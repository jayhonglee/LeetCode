class Solution {
    public int maximumProduct(int[] nums, int k) {
        PriorityQueue<Integer> minheap = new PriorityQueue<>();

        for(int num : nums) {
            minheap.add(num);
        }

        for(int i = 0; i < k; i++) {
            minheap.add(minheap.remove() + 1);
        }

        int MOD = 1000000007;
        long ans = 1;

        while(!minheap.isEmpty()) {
            ans =  (ans * minheap.remove()) % MOD;
        }

        return (int)ans;
    }
}