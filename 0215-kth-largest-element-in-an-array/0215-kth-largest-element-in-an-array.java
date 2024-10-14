class Solution {
    public int findKthLargest(int[] nums, int k) {
//         Define a min heap
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        
//         Loop over the array and add each number
        for(int num: nums) {
            heap.add(num);
            if(heap.size() > k) {
                heap.remove();
            }
        }
        
//         Return the element from the heap
        return heap.poll();
    }
}