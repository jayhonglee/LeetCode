/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let string = word.split(""), left = 0;

    if(string.includes(ch)) {
        let right = string.indexOf(ch); 

        let arrayOne = string.slice(left, right+1);
        let arrayTwo = string.slice(right+1, word.length);

        while(left < right) {
            let temp = arrayOne[left];
            arrayOne[left] = arrayOne[right];
            arrayOne[right] = temp;
            left++;
            right--;
        }

        const ans = arrayOne.concat(arrayTwo).join("");

        return ans;
    } else {
        return word;
    }    
};