class Solution {
    // Set left as starting and right as starting
    // For each left, loop over the right (sliding window)
    //      until the length of curr substring - most frequent > k
    public int characterReplacement(String s, int k) {
        char[] charArr = s.toCharArray();
        int[] count = new int[26];
        int left = 0;
        int ans = 0;

        for(int right = 0; right < charArr.length; right++) {
            count[charArr[right] - 'A']++;

            while((right - left + 1) - findMax(count) > k) {
                count[charArr[left] - 'A']--;
                left++;
            }

            ans = Math.max(ans, right - left + 1);
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