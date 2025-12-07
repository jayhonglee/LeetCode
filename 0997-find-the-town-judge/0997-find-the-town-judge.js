/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    // Accepted solution (can be improved)
    // // Loop over the trust array & build adjacency list & trusted counter for each person
    // const trustList = new Array(n);
    // const trustedCounter = new Array(n).fill(0);

    // for(let i = 0; i < n; i++) {
    //     trustList[i] = [];
    // }

    // for(const [a, b] of trust) {
    //     trustList[a - 1].push(b);
    //     trustedCounter[b - 1]++;
    // }

    // // Loop over the adjList again and check if there is a person who doesnt trust anyone and is trusted by all other people
    // for(let i = 0; i < n; i++) {
    //     if(trustList[i].length === 0 && trustedCounter[i] === n - 1) return i + 1;
    // }
    
    // // Return -1 if no judge exists
    // return -1;

    // Optimal solution
    const score = new Array(n).fill(0);

    for(const [a,b] of trust) {
        score[a - 1]--;
        score[b - 1]++;
    }

    for (let i = 0; i < n; i++) {
        if (score[i] === n - 1) return i + 1;
    }
    return -1;
};