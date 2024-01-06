/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(" ");

    const reverseWords = words.map(word => {
        const characters = word.split('');
        let left = 0, right = characters.length - 1;
        while(left < right) {
            let temp = characters[left];
            characters[left] = characters[right];
            characters[right] = temp;
            left++;
            right--;
        }

        return characters.join("");
    })

    return reverseWords.join(" ");
};