class Solution {
    public int rob(int[] nums) {
        if(nums.length == 1) return nums[0];

        return Math.max(robHelper(0, nums.length - 1, nums), robHelper(1, nums.length, nums));
    }

    private int robHelper(int start, int end, int[] nums) {
        int prev = 0;
        int beforePrev = 0;

        for(int idx = start; idx < end; idx++) {
            int curr = Math.max(nums[idx] + beforePrev, prev);
            
            beforePrev = prev;
            prev = curr;
        }

        return prev;
    }
}