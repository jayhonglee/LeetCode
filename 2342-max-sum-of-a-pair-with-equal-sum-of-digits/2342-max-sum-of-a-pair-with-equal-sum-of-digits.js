/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let getDigitSum = (num) => {
        let sum = 0;
        while(num > 0) {
            sum += num % 10 ;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    
    let curr = 0;
    let hashmap = new Map();
    let ans = -1;
    
    for(const num of nums) {
        curr = getDigitSum(num);
        if(hashmap.has(curr)) {
            ans = Math.max(num + hashmap.get(curr), ans);
            hashmap.set(curr, Math.max(hashmap.get(curr), num));
        } else {
            hashmap.set(curr, num);
        }
    }
    
    return ans;
};