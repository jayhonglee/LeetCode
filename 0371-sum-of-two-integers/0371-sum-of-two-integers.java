class Solution {
    // Binary Approach:
    // Find the xor of a and b
    // Add the found xor value with carry bits 
    // xor value will be stored to a and b will storing carry bits
    public int getSum(int a, int b) {
        while (b != 0) {
            int carry = (a & b) << 1;
            a = a ^ b;              
            b = carry;
        }
        return a;
    }
}