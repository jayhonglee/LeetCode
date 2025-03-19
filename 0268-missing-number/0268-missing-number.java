class Solution {
    public int missingNumber(int[] nums) {
        // sort the array
        Arrays.sort(nums);

        // loop over
        for(int i = 0; i < nums.length; i++) {
            int curr = nums[i];
            if(curr != i) return i;
        }

        // return ans if not found in loop
        return nums.length;
    }
}