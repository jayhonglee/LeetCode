class Solution {
    public int findKthLargest(int[] nums, int k) {
//         Define a min heap
        PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.reverseOrder());
        
//         Loop over the array and add each number
        for(int num: nums) {
            heap.add(num);
        }
        
//         Return the element from the heap
        for(int i = 0; i < k - 1; i++) {
            heap.remove();
        }
        
        return heap.poll();
    }
}