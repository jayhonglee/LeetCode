/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
//     brute force approach (TLE):
//     let ans = new Array(ratings.length).fill(1);
    
//     for(let i = 0; i < ratings.length; i++) {
//         const current = ratings[i];
//         const prev = ratings[i - 1] !== undefined ? ratings[i - 1] : Infinity;
//         const next = ratings[i + 1] !== undefined ? ratings[i + 1] : Infinity;
//         const initialAns = ans[i];
        
//         if(current > prev) {
//             while(ans[i] <= ans[i - 1]) {
//                 ans[i]++;
//             }
//         } 
        
//         if(current > next) {
//             while(ans[i] <= ans[i + 1]) {
//                 ans[i]++;
//             }
//         }
        
//         if(ans[i] !== initialAns) {
//             i-= 2;
//         };
//     }

//     return ans.reduce((acc, val) => acc + val);
    
//     Optimal:
    let ans = new Array(ratings.length).fill(1);
    
    for(let i = 1; i < ratings.length; i++) {
        const current = ratings[i];
        const prev = ratings[i - 1] !== undefined ? ratings[i - 1] : Infinity;
        
        if(current > prev) {
            while(ans[i] <= ans[i - 1]) {
                ans[i]++;
            }
        } 
    }
    
    for(let i = ratings.length - 2; i >= 0; i--) {
        const current = ratings[i];
        const prev = ratings[i + 1] !== undefined ? ratings[i + 1] : Infinity;
        
        if(current > prev) {
            while(ans[i] <= ans[i + 1]) {
                ans[i]++;
            }
        }
    }

    return ans.reduce((acc, val) => acc + val);
};