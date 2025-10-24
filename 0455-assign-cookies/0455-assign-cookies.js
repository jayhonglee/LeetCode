/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // Two pointers Solution
    // Time = O(nlog(n) + nlog(m)) Space = O(1)
    // Comment = But this code is written after misunderstanding that a child can have multiple cookies. See the next code for cleaner solution.

    // // sort g & s 
    // g.sort((a,b)=> a - b);
    // s.sort((a,b)=> a - b);

    // // iterate over g and iterate over s untill found s that is >= 
    // let ans = 0;
    // let j = 0;
    
    // for(const i of g) {
    //     let curr = 0;

    //     while(j < s.length) {
    //         if(s[j] >= i) {
    //             j++;
    //             ans++;
    //             break;
    //         } 
    //         curr += s[j];
    //         j++;
    //     }
    // }

    // return ans;

    // Two pointers Solution
    // Time = O(nlog(n) + nlog(m)) Space = O(1)

    // sort g & s 
    g.sort((a,b)=> a - b);
    s.sort((a,b)=> a - b);

    let i = 0;
    let j = 0;
    while(i < g.length && j < s.length){
        if(g[i] <= s[j]) i++;
        j++;
    }

    return i;
};