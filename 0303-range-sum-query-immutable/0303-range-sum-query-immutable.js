/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefix = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        this.prefix[i] = nums[i] + this.prefix[i-1];
    }            
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let l, r;
    if(!this.prefix[left - 1]) {
        l = 0;
    } else {
        l = this.prefix[left - 1];
    }
    r = this.prefix[right]
    console.log(l, r);
    return  r - l;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */