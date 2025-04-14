class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        // Bellman Ford's Approach:

        // Set prices & temp prices arrays
        // Initial state: starting node is 0 with others Infinity
        int[] prices = new int[n];
        int max = Integer.MAX_VALUE;
        
        Arrays.fill(prices, max);
        prices[src] = 0;

        // Loop for k + 1 times
        for(int i = 0; i < k + 1; i++) {
            int[] tempPrices = Arrays.copyOf(prices, n);

            // Go over every edge and update temp if the starting node is not Infinity
            for(int[] flight : flights) {
                int from = flight[0];
                int to = flight[1];
                int price = flight[2];

                if(prices[from] != max) {
                    tempPrices[to] = Math.min(tempPrices[to], prices[from] + price);
                }
            }

            // Update prices array to be temp prices 
            prices = tempPrices;
        }

        // Return the destination node 
        return prices[dst] == max ? -1 : prices[dst];
    }
}