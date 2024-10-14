class Solution {
    public int minStoneSum(int[] piles, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.reverseOrder());
        
        for(int pile : piles) {
            heap.add(pile);
        }
        
        for(int i = 0; i < k; i++) {
            int curr = heap.remove();
            int remove = curr / 2;
            heap.add(curr - remove);
        }
        
        int ans = 0;
        
        for(int ele : heap) {
            ans += ele;
        }
        
        return ans;
    }
}