class Solution {
    public int characterReplacement(String s, int k) {
        // Set left as starting and right as starting
        // For each left, loop over the right (sliding window)
        //      until the length of curr substring - most frequent > k
        char[] charArr = s.toCharArray();
        int[] count = new int[26];
        int left = 0, right = 0;
        int ans = 0;

        while(right < charArr.length) {
            count[charArr[right] - 'A']++;

            while((right - left + 1) - findMax(count) > k) {
                count[charArr[left] - 'A']--;
                left++;
            }

            ans = Math.max(ans, right - left + 1);
            right++;
        }

        return ans;
    }

    private int findMax(int[] arr) {
        int max = 0;

        for(int num : arr) {
            max = Math.max(max, num);
        }

        return max;
    }
}