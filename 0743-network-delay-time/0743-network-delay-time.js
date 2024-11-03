/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = new Map();
    for(const [nodeX, nodeY, time] of times) {
        if(!graph.has(nodeX)) graph.set(nodeX, []);
        
        graph.get(nodeX).push([nodeY, time]);
    }
    
    const nodeReachTime = new Map();
    for(let i = 1; i <= n; i++) {
        nodeReachTime.set(i, Infinity);
    }
    
    const queue = [];
    queue.push([k,0])
    nodeReachTime.set(k, 0);
    
    while(queue.length) {
        queue.sort((a,b) => a[1] - b[1]);
        const [currentNode, currentReachTime] = queue.shift();
        
        if(graph.get(currentNode) && graph.get(currentNode).length > 0) {
            const neighbors = graph.get(currentNode);
            
            for(const [neighborNode, neighborReachTime] of neighbors) {
                const newTimeToReachNeighbor = currentReachTime + neighborReachTime;
                if(newTimeToReachNeighbor < nodeReachTime.get(neighborNode)) {
                    nodeReachTime.set(neighborNode, newTimeToReachNeighbor);
                    queue.push([neighborNode, newTimeToReachNeighbor]);
                }
            }
        }
    }
    
    let ans = -1;
    for(const reachTime of nodeReachTime.values()) {
        if(reachTime === Infinity) return -1;
        ans = Math.max(ans, reachTime);
    }
    
    return ans;
};