/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    // edge case: when there are no edges
    if(!edges.length) {
        const ans = [];
        for(let i = 0; i < n; i++) {
            ans.push(i);
        }
        return ans;
    }

    // create an adjacent node list
    const adjList = new Map();
    for(const [x, y] of edges) {
        if(!adjList.has(x)) adjList.set(x, []);
        if(!adjList.has(y)) adjList.set(y, []);

        adjList.get(x).push(y);
        adjList.get(y).push(x);
    }

    let leaves = [];
    for(const [key, value] of adjList) {
        if(value.length === 1) leaves.push(key);
    }

    while(n > 2) {
        n -= leaves.length;
        const nextLeaves = [];

        for(const leaf of leaves) {
            const neighborOfLeaf = adjList.get(leaf)[0];
            const listOfNeighbor = adjList.get(neighborOfLeaf) || [];

            listOfNeighbor.splice(listOfNeighbor.indexOf(leaf), 1);

            if(listOfNeighbor.length === 1) nextLeaves.push(neighborOfLeaf);
            adjList.delete(leaf);
        }

        leaves = nextLeaves;
    }

    const ans = Array.from(adjList.keys());
    return ans;
};