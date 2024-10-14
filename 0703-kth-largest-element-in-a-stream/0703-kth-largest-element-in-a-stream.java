class KthLargest {
    private int size = -1;
    private PriorityQueue<Integer> heap = new PriorityQueue<>();
    
    public KthLargest(int k, int[] nums) {
        this.size = k;
        for(int num : nums) {
            heap.add(num);
        }
    }
    
    public int add(int val) {
        heap.add(val);
        while(heap.size() > this.size) {
            heap.remove();
        }
        
        return heap.peek();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */