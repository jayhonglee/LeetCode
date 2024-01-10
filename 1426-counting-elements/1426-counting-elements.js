/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let ans = 0, set = new Set();
    
    for(let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }
    
    for(let i = 0; i < arr.length; i++) {
        if(set.has(arr[i]+1)){
            ans++;   
        }
    }
    
    return ans;    
};