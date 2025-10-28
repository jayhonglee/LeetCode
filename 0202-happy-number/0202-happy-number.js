/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // Create a function 
    // Iterate over each decimal point and square each and append
    const set = new Set();

    const iterate = (n) => {
        if(set.has(n)) return false;
        set.add(n);

        let nStr = n + "";
        let sum = 0;

        for(const digit of nStr) {
            sum += Math.pow(Number(digit), 2);
        }

        if(sum === 1) return true;

        return iterate(sum);
    }

    return iterate(n);
};