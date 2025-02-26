/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const cache = Array.from({ length: word1.length + 1 }, () => new Array(word2.length + 1).fill(0));

    for(let i = 0; i < word2.length + 1; i++) {
        cache[word1.length][i] = word2.length - i;
    }

    for(let i = 0; i < word1.length; i++) {
        cache[i][word2.length] = word1.length - i;
    }

    for(let i = word1.length - 1; i >= 0; i--) {
        for(let j = word2.length - 1; j >= 0; j--) {
            if(word1[i] === word2[j]) cache[i][j] = cache[i + 1][j + 1]
            else {
                cache[i][j] = 1 + Math.min(
                    cache[i + 1][j],
                    cache[i][j + 1],
                    cache[i + 1][j + 1]
                )       
            }
        }
    }

    return cache[0][0];
};