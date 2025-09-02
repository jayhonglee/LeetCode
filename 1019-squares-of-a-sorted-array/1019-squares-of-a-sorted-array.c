/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* sortedSquares(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* ans = malloc(numsSize * sizeof(int));
    int pos = numsSize - 1;
    
    int start = 0, finish = numsSize - 1;
    while(start <= finish) {
        int leftSq = nums[start] * nums[start];
        int rightSq = nums[finish] * nums[finish];
        
        if(leftSq >= rightSq) {
            ans[pos--] = leftSq;
            start++;
        } else {
            ans[pos--] = rightSq;
            finish--;
        }
    }
    
    return ans;
}