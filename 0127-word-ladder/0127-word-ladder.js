/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
//     Create adjacency list
    const words = [beginWord, ...wordList];
    const adjacencyList = new Map();
    const length = beginWord.length;

    const intermediateMap = new Map();

    for (const word of words) {
        for (let i = 0; i < length; i++) {
            const genericWord = word.slice(0, i) + '*' + word.slice(i + 1);
            if (!intermediateMap.has(genericWord)) {
                intermediateMap.set(genericWord, []);
            }
            intermediateMap.get(genericWord).push(word);
        }
    }

    // Build adjacency list using intermediate forms
    for (const [genericWord, matchingWords] of intermediateMap.entries()) {
        for (const word of matchingWords) {
            if (!adjacencyList.has(word)) {
                adjacencyList.set(word, []);
            }
            for (const neighbor of matchingWords) {
                if (neighbor !== word) {
                    adjacencyList.get(word).push(neighbor);
                }
            }
        }
    }
    
//     BFS
    let queue = [beginWord];
    let ans = 1;
    const seen = new Set();
    
    while(queue.length > 0) {
        let nextQueue = [];
        
        for(const word of queue) {
            if(seen.has(word)) continue;
            seen.add(word);
            if(word === endWord) return ans;
            
            nextQueue.push(...adjacencyList.get(word))
        }
        
        queue = nextQueue;
        ans++;
    }
    
    return 0;
};