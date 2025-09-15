function permuteUnique(nums: number[]): number[][] {
    // Accepted but not optimal both is runtime and space

    // Create backtrack function
    const backtrack = function(nums: number[], curr: number[]): void {
        if(!nums.length && !seen.has(curr.join(","))) {
            seen.add(curr.join(","));
            ans.push(curr);
            return;
        }

        for(const [idx, num] of nums.entries()) {
            curr.push(num);
            backtrack([...nums.filter((_, i) => i !== idx)], [...curr]);
            curr.pop();
        }
    }

    // Call backtrack function
    let ans = [];
    const seen = new Set();
    backtrack([...nums], []);

    // Return ans array
    return ans;
};