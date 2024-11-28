var rotate = function(nums, k) {
    k %= nums.length;
    
    if (k === 0) return;
    
    let count = 0;
    let start = 0;
    
    while (count < nums.length) {
        let current = start;
        let prev = nums[start];
        
        do {
            const next = (current + k) % nums.length;
            const temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (current !== start);
        
        start++;
    }
};