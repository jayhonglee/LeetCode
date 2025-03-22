/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    // Union-find algorithm 

    // Define parent and rank
    const parent = Array.from({ length: edges.length }, (val, idx) => idx);
    const rank = new Array(edges.length).fill(1);

    // Define find f(x)
    const find = (node) => {
        let par = parent[node];

        while(par !== parent[par]) {
            parent[par] = parent[parent[par]]; // not necessarily needed but flattnes to make it faster 
            par = parent[par];
        }

        return par;
    }

    // Define union f(x)
    const union = (x, y) => {
        const xPar = find(x);
        const yPar = find(y);
        const xParRank = rank[xPar];
        const yParRank = rank[yPar];

        if(xPar === yPar) return false;

        if(xParRank > yParRank) {
            parent[yPar] = xPar;
            rank[xPar]++;
        } else {
            parent[xPar] = yPar;
            rank[yPar]++;
        }

        return true;
    }

    // Loop over each edge and if the edge is unioning to the same parent 
    for(const [x, y] of edges) {
        if(!union(x - 1, y - 1)) return [x, y];
    }

    return [];
};