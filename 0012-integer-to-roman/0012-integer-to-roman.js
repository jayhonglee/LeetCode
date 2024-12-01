/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    num = num.toString();

    const hashmap = new Map([
        [1, "I"],
        [4, "IV"],
        [5, "V"],
        [9, "IX"],
        [10, "X"],
        [40, "XL"],
        [50, "L"],
        [90, "XC"],
        [100, "C"],
        [400, "CD"],
        [500, "D"],
        [900, "CM"],
        [1000, "M"],
    ])

    let ans = [];
    for (let i = 0; i < num.length; i++) {
        const currentNum = num[i] * (10 ** (num.length - (i + 1)));
        const currentNumStr = currentNum.toString();
        const biggestDigit = currentNumStr[0];
        const remainingDigits = currentNumStr.length - 1;

        if (hashmap.has(currentNum)) {
            ans.push(hashmap.get(currentNum));
        } else {
            if (biggestDigit > 5) {
                ans.push(hashmap.get(5 * (10 ** remainingDigits)));

                for (let i = 0; i < biggestDigit - 5; i++) {
                    ans.push(hashmap.get(10 ** remainingDigits));
                }
            } else {
                for (let i = 0; i < biggestDigit; i++) {
                    ans.push(hashmap.get(10 ** remainingDigits));
                }
            }
        }
    }

    return ans.join("");
};