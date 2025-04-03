class Solution {
    public int findDuplicate(int[] nums) {
        // define slow and fast pointers
        int slow = nums[0];
        int fast = nums[nums[0]];

        // starting at index 0, move slow and fast pointers until cycle detection
        while(slow != fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }

        fast = 0;
        while(slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return fast;
    }
}