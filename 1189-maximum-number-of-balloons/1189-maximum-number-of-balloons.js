/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let hashmap = new Map([["b",0],["a",0],["l",0],["o",0],["n",0],]), filtered = [];
    
    for(char of text) {
        hashmap.set(char, hashmap.get(char) + 1)
    }

    hashmap.set("l", Math.trunc(hashmap.get("l")/2));
    hashmap.set("o", Math.trunc(hashmap.get("o")/2));

    for([key, value] of hashmap) {
        if(["b","a","l","o","n"].includes(key)) {
            filtered.push(value);
        }
    }
    
    const ans = Math.min.apply(Math, filtered);
    
    return ans;
        
};