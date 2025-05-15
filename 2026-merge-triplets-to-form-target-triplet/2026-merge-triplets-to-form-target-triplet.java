class Solution {
    public boolean mergeTriplets(int[][] triplets, int[] target) {
        List<int[]> queue = new ArrayList<>();

        for(int[] trip : triplets) {
            boolean valid = true;
            boolean hasAtleastOneTarget = false;

            for(int i = 0; i < trip.length; i++) {
                if(trip[i] > target[i]) {
                    valid = false;
                    break;
                }
                if(trip[i] == target[i]) hasAtleastOneTarget = true;
            }

            if(!hasAtleastOneTarget || !valid) continue;
            queue.add(trip);
        }

        int[] ans = new int[target.length];
        for(int[] trip : queue) {
            for(int i = 0; i < trip.length; i++) {
                ans[i] = Math.max(ans[i], trip[i]);
            }
        }

        for(int i = 0; i < ans.length; i++) {
            System.out.println(ans[i] + "," + target[i]);
            if(ans[i] != target[i]) return false;
        }

        return true;
    }
}
