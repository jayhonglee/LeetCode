class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.reverseOrder());
        for(int stone : stones) {
            heap.add(stone);
        }
        
        while(heap.size() > 1) {
            int one = heap.remove();
            int two = heap.remove();
            
            if(one != two) heap.add(Math.abs(one - two));
        }
        
        return heap.isEmpty() ? 0 : heap.remove();
    }
}