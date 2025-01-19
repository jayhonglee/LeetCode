/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const numArr = Array.from(x + "");

    let left = 0, right = numArr.length - 1;
    while(left < right) {
        let temp = null;

        while(numArr[left] === "-") {
            left++;
        }

        temp = numArr[left];
        numArr[left] = numArr[right];
        numArr[right] = temp;

        left++;
        right--;
    }

    const num = +numArr.join("");

    if(num < -(2**31) || num > (2**31) - 1) return 0;
    return num;
};