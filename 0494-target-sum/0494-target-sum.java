class Solution {
    public int findTargetSumWays(int[] nums, int target) {
        int lastIdx = nums.length - 1;
        Map<String, Integer> memo = new HashMap<>();

        return helper(nums, target, lastIdx, memo);
    }

    // find how many different ways curr - 1 can make (target + curr num) and (target - curr)
    private int helper(int[] nums, int target, int idx, Map<String, Integer> memo) {
        int val = nums[idx];
        String key = idx + "," + target;

        if(idx == 0) {
            if(val == 0) return val == target ? 2: 0;

            return val == Math.abs(target) ? 1 : 0;
        }

        if(memo.containsKey(key)) return memo.get(key);

        int ways = 0;
        ways += helper(nums, target - val, idx - 1, memo);
        ways += helper(nums, target + val, idx - 1, memo);

        memo.put(key, ways);

        return ways;
    }
}