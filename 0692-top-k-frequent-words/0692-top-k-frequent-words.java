class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        // Define a hashmap<String, Integer>
        Map<String, Integer> wordCountMap = new HashMap<>();

        // Loop over the words array
        for(String word : words) {
        //  if word doesnt exist, create the word and set hashmap count to 1
            if (!wordCountMap.containsKey(word)) wordCountMap.put(word, 0);

        //  if word exists, update the hashmap count
            wordCountMap.put(word, wordCountMap.get(word) + 1);
        }

        // Define a maxHeap
        // Set the sorting logic to compare the count and if count is the same use lexicographical order
        PriorityQueue<Map.Entry<String, Integer>> maxHeap = new PriorityQueue<>((a,b) -> {
           if (a.getValue().equals(b.getValue())) {
                return a.getKey().compareTo(b.getKey()); 
            }
            return b.getValue() - a.getValue(); 
        });

        // Loop over the hashmap and push it into heap Object<>{word, count}
        for(Map.Entry<String, Integer> entry : wordCountMap.entrySet()) {
            maxHeap.add(entry);
        }

        // Convert maxheap to List
        List<String> ans = new ArrayList<>();
        for (int i = 0; i < k && !maxHeap.isEmpty(); i++) {
            ans.add(maxHeap.poll().getKey()); 
        }
        
        return ans;
    }
}