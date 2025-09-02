double findMaxAverage(int* nums, int numsSize, int k) {
//     set a left, right pointers, currSum and ans 
    int left = 0, right = 0, currSum = 0;
    double ans = -INFINITY;
    
//     start right iteration till the end of the array
    for(right; right < numsSize; right++) {
        currSum += nums[right];
        
//     while (right - left + 1 < k increase left)
        while(right - left + 1 > k) {
            currSum -= nums[left];
            left++;
        }
        
//     find the average and compare with ans and store the maximum
        if(right - left + 1 == k) {
            double currAvg = (double)currSum / k;
            ans = ans > currAvg ? ans : currAvg;
        }
    }
    
//     return ans
    return ans;
}