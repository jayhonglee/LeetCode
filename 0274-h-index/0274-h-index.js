/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
//     brute force: O(n^2)
//     let hashmap = new Map();
//     for(const citation of citations) {
//         for(let i = 0; i <= citation; i++) {
//             if(!hashmap.has(i)) hashmap.set(i, 0);
            
//             const newValue = hashmap.get(i) + 1;
//             hashmap.set(i, newValue);
//         }
//     }
    
//     hashmap = [...hashmap].sort((a,b) => {
//         return b[0] - a[0];
//     })
    
//     for(const [key, value] of hashmap) {
//         if(key <= value) return key;
//     }
    
//     O(nlogn) attempt:
    citations.sort((a,b) => b - a);
    
    let ans = 0;
    for(let i = 0; i <= citations.length - 1; i++) {
        const curr = citations[i];
        
        if(i + 1 <= curr) ans = Math.max(ans, i + 1);
    }
    
    return ans;
};