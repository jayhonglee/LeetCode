class Solution {
    public int minOperations(String s) {
        // create two binary numbers of s.length that are alternting
        String binaryOne = "";
        String binaryTwo = "";
        boolean bool = true;

        for(int i = 0; i < s.length(); i++) {
            binaryOne += bool ? '1' : '0';
            binaryTwo += bool ? '0' : '1';
            bool = !bool;
        } 

        // xor each binary number to s and return one that has least different binaries
        int countOne = 0;
        int countTwo = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) != binaryOne.charAt(i)) {
                countOne++;
            }
            if (s.charAt(i) != binaryTwo.charAt(i)) {
                countTwo++;
            }
        }

        return Math.min(countOne, countTwo);
    }
}