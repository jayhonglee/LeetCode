
class TrieNode {
    constructor() {
        this.children = new Map();
        this.words = new Set();
    }
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for(const char of word) {
        if(!node.children.has(char)) node.children.set(char, new TrieNode());

        node = node.children.get(char);
        node.words.add(word);
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if(!word.length) return true;

    const firstChar = word[0];
    let node = this.root;
    
    if(!node.children.has(firstChar)) return false;
    node = node.children.get(firstChar);

    return node.words.has(word) ? true : false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for(const char of prefix) {
        if(!node.children.has(char)) return false;
        node = node.children.get(char);
    }

    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */