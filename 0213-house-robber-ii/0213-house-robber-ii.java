class Solution {
    public int rob(int[] nums) {
        if(nums.length == 1) return nums[0];

        int prev = 0;
        int beforePrev = 0;
        int ans = 0;

        // loop over the array but without the last house
        for(int idx = 0; idx < nums.length - 1; idx++) {
            // set current index max nums as max of (nums[idx] + nums[idx - 2], nums[idx - 1])
            int curr = Math.max(nums[idx] + beforePrev, prev);
            
            beforePrev = prev;
            prev = curr;
        }
        ans = prev;
        prev = 0;
        beforePrev = 0;
        
        // repeat the above step but without the first house
        for(int idx = 1; idx < nums.length; idx++) {
            int curr = Math.max(nums[idx] + beforePrev, prev);

            beforePrev = prev;
            prev = curr;
        }

        // return max of the two iteration results
        ans = Math.max(ans, prev);
        return ans;
    }
}