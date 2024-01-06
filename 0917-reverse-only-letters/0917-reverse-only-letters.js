/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let left = 0, right = s.length-1, split = s.split("");

    while(left < right) {
        if(!split[left].match(/^[A-Za-z]+$/)) {
            left++;
            continue;
        }
        if(!split[right].match(/^[A-Za-z]+$/)) {
            right--;
            continue;
        }

        let temp = split[left];
        split[left] = split[right];
        split[right] = temp;
        left++;
        right--;
    }

    return split.join("");
};