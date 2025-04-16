class Solution {
    public boolean isNStraightHand(int[] hand, int groupSize) {
        // Edge case: # of cards not divisible by groupsize, return fasle
        if(hand.length % groupSize != 0) return false;

        // Set hashmap to store occurence count of each card
        // Set minheap of cards
        Map<Integer, Integer> hashmap = new HashMap<>();
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for(int card : hand) {
            hashmap.putIfAbsent(card, 0);
            hashmap.put(card, hashmap.get(card) + 1);
            minHeap.add(card);
        }

        // Peek minheap 
        // If hashmap indicates the next consecutive numbered card isn't available return false
        // Update hashmap
        // Pop minheap if the occurence of the card is 0
        while(!minHeap.isEmpty()) {
            int minCard = minHeap.peek();

            for(int i = 0; i < groupSize; i++) {
                if(!hashmap.containsKey(minCard + i) || hashmap.get(minCard + i) < 1) return false;
                hashmap.put(minCard + i, hashmap.get(minCard + i) - 1);
            }

            while(!minHeap.isEmpty() && hashmap.get(minHeap.peek()) == 0) {
                minHeap.poll();
            }
        }

        // Return true
        return true;
    }
}