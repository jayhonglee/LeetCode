class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        // loop over the first array and store each num to set
        HashSet<Integer> set = new HashSet<>();

        for(int i = 0; i < nums1.length; i++) {
            int curr = nums1[i];
            set.add(curr);
        }

        // loop over the second num and if in set add to ans set
        HashSet<Integer> ans = new HashSet<>();

        for(int i = 0; i < nums2.length; i++) {
            int curr = nums2[i];
            if(set.contains(curr)) ans.add(curr);
        }

        // convert set to int [] and return
        int[] ansArr = new int[ans.size()];
        int idx = 0;
        for(int num : ans) {
            ansArr[idx++] = num;
        }

        return ansArr;
    }
}