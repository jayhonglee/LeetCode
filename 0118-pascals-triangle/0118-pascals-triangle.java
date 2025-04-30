class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ans = new ArrayList<>();

        // Loop over numRows times
        for(int i = 0; i < numRows; i++) {
            ans.add(new ArrayList<>());

            for(int j = 0; j <= i; j++) {
                // At each loop: if its start and end indexes set to 1.
                if(j == 0 || j == i) {
                    ans.get(i).add(1);
                    continue;
                }

                // If not, get sum of curr - 1, curr of previous row
                ans.get(i).add(
                    ans.get(i - 1).get(j - 1) + ans.get(i - 1).get(j)
                );
            }
        }

        return ans;
    }
}