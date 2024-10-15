/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
    let cum = 0, ans = 0;
    
    for(const x of weight.sort((a,b) => a - b)) {
        cum += x;
        
        if(cum <= 5000) {
            ans++;
        } else break;
    }
    
    return ans;
};