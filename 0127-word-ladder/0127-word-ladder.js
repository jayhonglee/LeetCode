/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {

    const wordListSet = new Set(wordList);
    const mutations = (word) => {
        const mutationsList = [];
        
        for(let i = 0; i < word.length; i++) {
            const char = word[i];
            const newChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            
            for(const newChar of newChars.filter(newChar => newChar !== char)) {
                const newWord = word.slice(0, i) + newChar + word.slice(i + 1);
                if(wordListSet.has(newWord)) mutationsList.push(newWord);
            }
        }
        
        return mutationsList;
    }
    
    let queue = [beginWord];
    let steps = 1;
    let seen = new Set();
    
    while(queue.length) {
        const nextQueue = [];
        
        for(const word of queue) {
            if(seen.has(word)) continue;
            seen.add(word);
            
            if(word === endWord) return steps;
            
            nextQueue.push(...mutations(word));
        }
        
        steps++;
        queue = nextQueue;
    }
    
    return 0;
};