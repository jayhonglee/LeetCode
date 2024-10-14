class Solution {
    public double getDistance(int[] coor) {
        return Math.sqrt(Math.pow(coor[0], 2) + Math.pow(coor[1], 2)); 
    }
    
    public int[][] kClosest(int[][] points, int k) {
//         Define a min heap
        PriorityQueue<int[]> heap = new PriorityQueue<>((n1, n2) -> {
            if(getDistance(n1) > getDistance(n2)) return -1;
            else return 1;
        });
        
//         Loop over points and push it into heap
//         If the size goes over k pop
        for(int[] point : points) {
            heap.add(point);
            if(heap.size() > k) heap.remove();
        }
        
//         Return min heap as int[][]
        int[][] ans = new int[k][2];
        int index = 0;
        while(!heap.isEmpty()) {
            ans[index++] = heap.poll();
        }
        
        return ans;
    }
}