/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let set = new Set(sentence);
    
    return set.size === 26 ? true : false;
};