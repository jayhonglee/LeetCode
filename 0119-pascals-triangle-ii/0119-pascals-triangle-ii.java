class Solution {
    public List<Integer> getRow(int rowIndex) {
        // Initial Solution:
        // List<List<Integer>> ans = new ArrayList<>();

        // for(int i = 0; i <= rowIndex; i++) {
        //     ans.add(new ArrayList<>());

        //     for(int j = 0; j <= i; j++) {
        //         if(j == 0 || j == i) {
        //             ans.get(i).add(1);
        //             continue;
        //         }

        //         ans.get(i).add(
        //             ans.get(i - 1).get(j - 1) + ans.get(i - 1).get(j)
        //         );
        //     }
        // }

        // return ans.get(rowIndex);

        // Better (Space Complexity Wise) Solution:
        List<Integer> row = new ArrayList<>();

        for (int i = 0; i <= rowIndex; i++) {
            row.add(0, 1);

            for (int j = 1; j < row.size() - 1; j++) {
                row.set(j, row.get(j) + row.get(j + 1));
            }
        }

        return row;
    }
}