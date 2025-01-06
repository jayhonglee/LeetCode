/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    // create an adjacencyList as start graph manner
    const adjacencyList = new Map();

    for(const account of accounts) {
        const name = account[0];
        const firstAccount = account[1];

        for(let i = 1; i < account.length; i++) {
            const currAccount = account[i];

            if(!adjacencyList.has(firstAccount)) adjacencyList.set(firstAccount, new Set());
            if(!adjacencyList.has(currAccount)) adjacencyList.set(currAccount, new Set());

            adjacencyList.get(firstAccount).add(currAccount);
            adjacencyList.get(currAccount).add(firstAccount);
        }
    }

    // loop over each component (connected nodes) and store them 
    // after each iteration push as an array its name and nodes
    const seen = new Set();
    let ans = [];

    for(const account of accounts) {
        const name = account[0];
        const firstAccount = account[1];
        if(seen.has(firstAccount)) continue;

        let queue = [firstAccount];
        let accounts = [];

        while(queue.length) {
            const nextQueue = [];

            for(const acc of queue) {
                if(seen.has(acc)) continue;
                seen.add(acc);
                accounts.push(acc);

                const neighbors = Array.from(adjacencyList.get(acc) || []);
                for(const neighbor of neighbors) {
                    nextQueue.push(neighbor);
                }
            }

            queue = nextQueue;
        }

        accounts.sort();
        ans.push([name, ...accounts]);
    }

    return ans;
};