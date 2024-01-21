/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    function applyStyle (string){
        let hashmap = new Map(), final = "", i = 0;
        
        for(const char of string) {
            if(hashmap.has(char)) {
                final += ` ${hashmap.get(char)}`;
            } else {
                i++;
                hashmap.set(char, i);
                final += ` ${hashmap.get(char)}`;
            }
        }
        return final
    }
    
    console.log(applyStyle(pattern), applyStyle(s.split(" ")))
    
    return applyStyle(pattern) === applyStyle(s.split(" "))
};