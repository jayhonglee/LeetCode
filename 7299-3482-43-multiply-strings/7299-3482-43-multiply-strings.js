/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === "0" || num2 === "0") return "0";

    // set array of size length of num1 and num2 sum
    const n = num1.length;
    const m = num2.length;
    const res = new Array(n + m).fill(0);

    // iterate num1 from right to left 
    for(let i = n - 1; i >= 0; i--) {
        // iterate num2 from right to left
        for(let j = m - 1; j >= 0; j--) {
            const subIdxOne = i + j + 1;
            const subIdxTwo = i + j;
            const sum = res[subIdxOne] + Number(num1[i]) * Number(num2[j]);

            res[subIdxOne] = sum % 10;
            res[subIdxTwo] += Math.floor(sum / 10);
        }
    }
    
    if(res[0] === 0) res.shift();
    return res.join("");
};