var rotate = function(nums, k) {
    k %= nums.length;

    if (k === 0) return nums;

    let count = 0;
    for (let start = 0; count < nums.length; start++) {
        let currentIndex = start;
        let currentValue = nums[start];

        do {
            const nextIndex = (currentIndex + k) % nums.length;
            const temp = nums[nextIndex];
            nums[nextIndex] = currentValue;
            currentValue = temp;
            currentIndex = nextIndex;
            count++;
        } while (start !== currentIndex);
    }
};