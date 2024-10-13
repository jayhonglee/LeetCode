/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
//     Define variables
    let hashmap = new Map();
    
//     Create a hashmap of edges (weights)
    for(let i = 0; i < equations.length; i++) {
        const [x, y] = equations[i];
        const value = values[i];
        
        if (!hashmap.has(x)) hashmap.set(x, []);
        if (!hashmap.has(y)) hashmap.set(y, []);
        
        hashmap.get(x).push([y, value]);
        hashmap.get(y).push([x, 1 / value]);
    }
    
    // Function to perform BFS and find the result of the query
    const bfs = (start, end) => {
        if (!hashmap.has(start) || !hashmap.has(end)) return -1.0; // If either variable is not in the graph

        let queue = [[start, 1.0]]; // [current node, accumulated product]
        let visited = new Set();
        visited.add(start);

        while (queue.length) {
            const [curr, product] = queue.shift();
            
            // If we reach the target variable, return the accumulated product
            if (curr === end) return product;

            // Visit all the neighbors
            for (const [neighbor, value] of hashmap.get(curr)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, product * value]);
                }
            }
        }

        return -1.0; // If no path is found
    };

    // Process each query using BFS
    let results = [];
    for (let [start, end] of queries) {
        results.push(bfs(start, end));
    }

    return results;
};