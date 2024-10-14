import java.util.PriorityQueue;

class Solution {
    public double getDistance(int[] coor) {
        return Math.sqrt(Math.pow(coor[0], 2) + Math.pow(coor[1], 2)); 
    }
    
    public int[][] kClosest(int[][] points, int k) {
        // Define a max heap (reverse order comparator)
        PriorityQueue<int[]> heap = new PriorityQueue<>((n1, n2) -> 
            Double.compare(getDistance(n2), getDistance(n1))
        );
        
        // Loop over points and push them into the heap
        // If the size goes over k, remove the largest distance point
        for (int[] point : points) {
            heap.add(point);
            if (heap.size() > k) {
                heap.remove();
            }
        }
        
        // Return the k closest points as an int[][]
        int[][] ans = new int[k][2];
        int index = 0;
        while (!heap.isEmpty()) {
            ans[index++] = heap.poll();
        }
        
        return ans;
    }
}
