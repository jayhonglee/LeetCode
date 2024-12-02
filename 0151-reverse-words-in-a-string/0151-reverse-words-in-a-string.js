/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
//     iterate over each character
//     if its not empty add it word
//     if its empty store current word to array and set word to new empty string
    let word = "", words = [];
    let left = 0, right = s.length - 1;
    
    while(left <= right && s[left] === " ") left++;
    while(left <= right && s[right] === " ") right--;
    
    for(let i = left; i <= right; i++) {
        if(s[i] === " " && word.length !== 0) {
            words.push(word);
            word = "";
        } else if(s[i] !== " ") {
            word += s[i];
            if(i === right) words.push(word);
        }
    }

    return words.reverse().join(" ");
};