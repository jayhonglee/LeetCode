/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let dict = {};
    for(const word of words) {
        dict[word] = (dict[word] || 0) + 1;
    }
    
    const wordCount = words.length;
    const wordLength = words[0].length;
    const totalStringLength = wordCount * wordLength;
    let ans = [];
    for(let i = 0; i < s.length - totalStringLength + 1; i++) {
        const tempDict = {...dict};
        let tempWordCount = 0;
        
        for(let j = i; j < i + totalStringLength; j += wordLength) {
            const currWord = s.slice(j, j + wordLength);
            
            if(tempDict[currWord]) {
                tempDict[currWord]--;
                tempWordCount++;
            } else {
                break;
            }
        }
        
        if(tempWordCount === wordCount) ans.push(i);
    }
    
    return ans;
};