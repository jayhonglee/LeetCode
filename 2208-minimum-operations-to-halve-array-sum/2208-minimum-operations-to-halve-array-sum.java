class Solution {
    public int halveArray(int[] nums) {
        double target = 0;
        PriorityQueue<Double> heap = new PriorityQueue<>(Comparator.reverseOrder());
        
        for(double num : nums) {
            target += num;
            heap.add(num);
        }
        
        target /= 2;
        int steps = 0;
        while(target > 0){
            double max = heap.remove();
            double curr = max / 2;
            heap.add(curr);
            target -= curr;
            steps++;
        }
        
        return steps;
    }
}