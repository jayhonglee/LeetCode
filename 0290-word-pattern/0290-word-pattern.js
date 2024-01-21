/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    function applyStyle (string){
        let hashmap = new Map(), final = "", i = 0;
        
        for(const char of string) {
            if(!hashmap.has(char)) {
                i++;
                hashmap.set(char, i);
            }
                final += ` ${hashmap.get(char)}`;
        }
        return final
    }
        
    return applyStyle(pattern) === applyStyle(s.split(" "))
};