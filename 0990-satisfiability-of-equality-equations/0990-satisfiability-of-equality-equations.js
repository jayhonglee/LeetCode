/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const adjacentNeighbors = new Map();

    // Iterate over the "==" equations
    for(const equation of equations) {

        const sign = equation[1];
        const x = equation[0];
        const y = equation[3];

        if(sign === "!") continue;

        // Create the nodes (if not present) and add them to a graph
        if(!adjacentNeighbors.has(x)) adjacentNeighbors.set(x, new Set());
        if(!adjacentNeighbors.has(y)) adjacentNeighbors.set(y, new Set());

        adjacentNeighbors.get(x).add(y);
        adjacentNeighbors.get(y).add(x);
    }

    // Iterate over the "!=" equations
    for(const equation of equations) {

        const sign = equation[1];
        const x = equation[0];
        const y = equation[3];

        if(sign === "=") continue;

        // Ensure the two nodes are not in the same graph
        // for(const [element, find] of [[x,y], [y,x]]){
            const element = x;
            const find = y;
            const isSeen = new Set();
            let queue = [element];

            while(queue.length) {
                const nextQueue = [];

                for(const element of queue) {
                    if(element === find) return false;
                    isSeen.add(element);

                    const neighbors = adjacentNeighbors.get(element) || [];
                    for(const neighbor of neighbors) {
                        if(!isSeen.has(neighbor)) nextQueue.push(neighbor);
                    }
                }

                queue = nextQueue;
            }
        // }
    }

    return true;
};