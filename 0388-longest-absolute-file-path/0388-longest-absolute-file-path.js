/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    const splittedStr = input.split("\n");
    const lastDir = [];
    let maxLength = 0;

    for(const str of splittedStr) {
        const depth = (str.match(/\t/g) || []).length;
        const name = str.replace(/\t/g, "");

        if (depth === 0) {
            lastDir[depth] = name;
        } else {
            lastDir[depth] = lastDir[depth - 1] + '/' + name;
        }

        if (name.includes(".")) {
            maxLength = Math.max(maxLength, lastDir[depth].length);
        }
    }

    return maxLength;
};