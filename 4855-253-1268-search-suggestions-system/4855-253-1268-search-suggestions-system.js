/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    class TrieNode {
        constructor() {
            this.children = new Map();
            this.suggestions = [];
        }
    }

    const root = new TrieNode();

    for(const product of products) {
        let node = root;

        for(const char of product) {
            if(!node.children.has(char)) node.children.set(char, new TrieNode());
            node = node.children.get(char);

            node.suggestions.push(product);
            node.suggestions.sort();
            
            while(node.suggestions.length > 3) {
                node.suggestions.pop();
            }
        }
    }

    let ans = [];
    let node = root;
    for(const char of searchWord) {
        if(!node.children.has(char)) {
            node.children = new Map(); //why??
            
            ans.push([])
        } else {
            node = node.children.get(char);
            ans.push(node.suggestions);
        }
        
    }

    return ans; 
};