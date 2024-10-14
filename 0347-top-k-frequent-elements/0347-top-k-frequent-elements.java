class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> hashmap = new HashMap<>();
        PriorityQueue<Integer> heap = new PriorityQueue<>((n1, n2) -> hashmap.get(n1) - hashmap.get(n2));
        
        for(int num : nums) {
            if(hashmap.get(num) == null) hashmap.put(num, 1);
            else hashmap.put(num, hashmap.get(num) + 1);
        }
        
        for(int key : hashmap.keySet()) {
            heap.add(key);
            if (heap.size() > k) {
                heap.remove();
            }
        }
        
        int[] ans = new int[k];
        for (int i = 0; i < k; i++) {
            ans[i] = heap.remove();
        }
        
        return ans;
    }
}