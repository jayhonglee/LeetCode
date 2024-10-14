class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
//         Define heap 
        PriorityQueue<Integer> heap = new PriorityQueue<>((n1, n2) -> {
            int n1Diff = Math.abs(x - n1), n2Diff = Math.abs(x - n2);
            
            if(n1Diff == n2Diff) return n2 - n1;
            
            return n2Diff - n1Diff;
        });
        
//         Loop over the array and add to heap (diff, num)
//         If heap size goes over k, pop the heap
        for(int num : arr) {
            heap.add(num);
            while(heap.size() > k) {
                heap.remove();
            }
        }
        
//         Return ans
        List<Integer> ans = new ArrayList<>();
        for(int ele : heap) {
            ans.add(ele);
        }
        
        Collections.sort(ans);
        return ans;
    }
}