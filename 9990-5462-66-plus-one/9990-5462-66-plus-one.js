/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // loop over from the end to start
    let carryOne = false;
    for(let i = digits.length - 1; i >= 0; i--) {
        // if the last element is not 9 just add 1 and done
        // if the last element is 9, set it to 0 and add 1 to the next element.
        // repeat the above

        if(i !== digits.length - 1 && !carryOne) continue;

        if(digits[i] < 9) {
            digits[i]++;
            carryOne = false;
        } else {
            digits[i] = 0;
            carryOne = true;
        }
    }

    if(carryOne) digits.unshift(1);

    return digits;
};