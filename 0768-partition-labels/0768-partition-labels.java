class Solution {
    public List<Integer> partitionLabels(String s) {
        // define varaibles
        List<Integer> ans = new ArrayList<> ();
        Map<Character, Integer> hashMap = new HashMap<> ();
        char[] c = s.toCharArray();
        
        // loop over the String s and map each last appearance
        for(int i = 0; i < s.length(); i++) {
            hashMap.put(c[i], i);
        }

        // loop over the String s and update end idx of this partition and add it to ans array if done
        int idx = 0;
        int count = 0;
        Integer last = 0;

        while(idx < c.length) {
            char curr = c[idx];
            last = Math.max(last, hashMap.get(curr));
            count++;

            if(idx == last) {
                ans.add(count);
                count = 0;
            }

            idx++;
        }

        // retur ans array
        return ans;
    }
}