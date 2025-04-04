class Solution {
    public int findDuplicate(int[] nums) {
        // define slow and fast pointers
        int slow = 0;
        int fast = 0;

        // starting at index 0, move slow and fast pointers until they meet
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while(slow != fast);

        // based on Floyd's algorithm, distance between the start to entry of cycle and distance between the entry of cycle to where the pointers met is the same
        slow = 0;
        while(slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;
    }
}