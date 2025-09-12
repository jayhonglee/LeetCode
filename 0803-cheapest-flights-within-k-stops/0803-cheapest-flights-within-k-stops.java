class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
//         Define adjacency list
        Map<Integer, List<int[]>> adjacencyList = new HashMap<>();
        
        for(int[] flight: flights) {
            int from = flight[0];
            int to = flight[1];
            int price = flight[2];
            
            if (!adjacencyList.containsKey(from)) adjacencyList.put(from, new ArrayList<>());
            adjacencyList.get(from).add(new int[]{to, price});
        }
        
//         Dijkstra's Algorithm - Set all node estimates to Infinity except src & Start from the src (use minheap)
        int[] stops = new int[n];
        Arrays.fill(stops, Integer.MAX_VALUE);
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        pq.offer(new int[] { 0, src, 0 });

        while(!pq.isEmpty()) {
            int[] temp = pq.poll();
            int dist = temp[0];
            int node = temp[1];
            int steps = temp[2];

            if (steps >= stops[node] || steps > k + 1) continue;

            stops[node] = steps;

            if (node == dst) return dist;

            if (!adjacencyList.containsKey(node)) continue;

            for (int[] a : adjacencyList.get(node)) {
                pq.offer(new int[] { dist + a[1], a[0], steps + 1 });
            }
        }
        return -1;
    }
}