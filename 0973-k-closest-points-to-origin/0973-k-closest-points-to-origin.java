class Solution {
    public int[][] kClosest(int[][] points, int k) {
//         Define a min heap
        PriorityQueue<int[]> pq = new PriorityQueue<int[]>((a,b) -> {
            return (int)(Math.pow(a[0],2)+Math.pow(a[1],2)) - (int)(Math.pow(b[0],2)+Math.pow(b[1],2));
        });
        
//         For each point insert it into the min heap
//         If the size of the heap is bigger than k, remove
        for(int[] point : points) {
            pq.add(point);
        }
        

//      Convert the priority queue to a 2D array
        int[][] result = new int[k][2];
        for (int i = 0; i < k; i++) {
            result[i] = pq.remove();
        }
        
//         Return the min heap
        return result;
    }
}