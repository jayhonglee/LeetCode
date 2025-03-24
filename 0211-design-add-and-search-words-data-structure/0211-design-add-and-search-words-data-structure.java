// Approach:
// Create TrieNode class with suggestions
// When searching, go over the word String and look at the hashmap of each letter and until its of length word (if the character of the String is . check all hashmaps)

class TrieNode {
    Map<Character, TrieNode> children;
    boolean word;

    TrieNode() {
        this.children = new HashMap<>();
        this.word = false;
    }
}

class WordDictionary {
    TrieNode root;

    public WordDictionary() {
        this.root = new TrieNode();
    }
    
    public void addWord(String word) {
        TrieNode node = this.root;

        for(char c : word.toCharArray()) {
            if(!node.children.containsKey(c)) node.children.put(c, new TrieNode());

            node = node.children.get(c);
        }

        node.word = true;
    }
    
    public boolean search(String word) {
        return searchHelper(0, word, root);
    }

    private boolean searchHelper(int idx, String word, TrieNode node) {
        if (idx == word.length()) return node.word;

        char c = word.charAt(idx);

        if(c == '.') {
            for(TrieNode child : node.children.values()) {
                if(searchHelper(idx + 1, word, child)) return true;
            }
            return false;
        } else {
            if(!node.children.containsKey(c)) return false;
            return searchHelper(idx + 1, word, node.children.get(c));
        }
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.addWord(word);
 * boolean param_2 = obj.search(word);
 */