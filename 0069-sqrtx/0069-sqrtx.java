class Solution {
    public int mySqrt(int x) {
        // Edge case
        if(x < 2) return x;

        // Binary search (1 to x)
        int low = 1, high = x;
        while(low < high) {
            int mid = low + (high - low) / 2 + 1;
            long square = (long) mid * mid;

            // if mid value is sqrt, return
            if(square == x) return mid;

            // if mid value is bigger, set high to mid - 1
            else if(square > x) high = mid - 1;

            // if mid value is smaller, set low = mid
            else low = mid;
        }

        // return low
        return low;
    }
}