/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
//     brute force:
    let hashmap = new Map();
    for(const citation of citations) {
        for(let i = 0; i <= citation; i++) {
            if(!hashmap.has(i)) hashmap.set(i, 0);
            
            const newValue = hashmap.get(i) + 1;
            hashmap.set(i, newValue);
        }
    }
    
    hashmap = [...hashmap].sort((a,b) => {
        return b[0] - a[0];
    })
    
    for(const [key, value] of hashmap) {
        if(key <= value) return key;
    }
};