/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hashmap = new Map();
    
    for(const char of s){
        hashmap.set(char, (hashmap.get(char) || 0) + 1);
    }
    
    let arr = [];
    
    hashmap.forEach((value, key) => {
        arr.push([key, value]);
    })
    
    return arr.sort((a,b) => {
        return b[1] - a[1] ;
    }).map(char => {
        let str = "";
        for(let i = 0; i < char[1]; i++){
          str += char[0];
        } 
        console.log(str);
        return str;
    }).join("");
    
    // return arr;
};