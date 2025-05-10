class Solution {
    public int characterReplacement(String s, int k) {
        // Set left as starting and right as starting
        // For each left, loop over the right (sliding window)
        //      until the length of curr substring - most frequent > k
        char[] charArr = s.toCharArray();
        int[] count = new int[26];
        int maxCount = 0, maxLength = 0;
        int left = 0, right = 0;

        while(right < charArr.length) {
            count[charArr[right] - 'A']++;
            maxCount = Math.max(maxCount, count[charArr[right] - 'A']);

            while((right - left + 1) - maxCount > k) {
                count[s.charAt(left) - 'A']--;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }

        return maxLength;
    }
}