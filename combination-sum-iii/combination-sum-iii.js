/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
//     create a backtrack function
    const toAnsSet = (arr) => arr.sort().join(",");
    
    
    const backtrack = (curr, set) => {
        if(curr.length === k && curr.reduce((acc, ele) => acc + ele) === n && !ansSet.has(toAnsSet(curr)) ) {
            ansSet.add(toAnsSet(curr));
            return ans.push(curr);
        }
        
        if(curr.length > k) return;
        
        for(let i = 1; i < 10; i++) {
            if(set.has(i)) continue;
            
            set.add(i);
            backtrack([...curr, i], set);
            set.delete(i);
        }
    }
    
//     return ans
    let ans = [];
    let set = new Set();
    let ansSet = new Set();
    backtrack([], set);
    return ans;
};