/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    const backtrack = (number) => {
        if(number.length > 1 && Math.abs(number[number.length - 1] - number[number.length - 2]) !== k || number.length > n) return;
        
        if(number.length == n && number[0] !== '0') return ans.push(+number);
        
        for(let i = 0; i < 10; i++) {
            backtrack(number + i);
        }
    }
    
    let ans = [];
    backtrack("");
    return ans;
};