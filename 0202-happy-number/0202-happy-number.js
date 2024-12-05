/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let number = n.toString();
    let sum = 0;
    let set = new Set();
    
    while(sum !== 1) {
        sum = 0;
        for(let digit of number) {
            sum += Math.pow(+digit, 2); 
        }
        if(set.has(sum)) return false;
        set.add(sum);
        number = sum.toString();
    }
    
    return true;
};