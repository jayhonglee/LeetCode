/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    // Create graph
    const graph = new Map();
    for (let i = 0; i < edges.length; i++) {
        const [x, y] = edges[i];
        const probability = succProb[i];
        
        if (!graph.has(x)) graph.set(x, []);
        if (!graph.has(y)) graph.set(y, []);
        
        graph.get(x).push([y, probability]);
        graph.get(y).push([x, probability]);
    }
    
    // Dijkstra's Algorithm with max-priority queue (max-heap using a priority queue)
    const maxHeap = new MaxPriorityQueue({ priority: x => x[1] });
    const bestProbabilities = Array(n).fill(0);
    bestProbabilities[start_node] = 1; // Probability of starting node to itself is 1

    maxHeap.enqueue([start_node, 1]);

    while (!maxHeap.isEmpty()) {
        const [node, prob] = maxHeap.dequeue().element;
        
        // If we reach the end node, return the probability
        if (node === end_node) return prob;
        
        if (graph.has(node)) {
            for (const [neighbor, edgeProb] of graph.get(node)) {
                const newProb = prob * edgeProb;
                     
                if (newProb > bestProbabilities[neighbor]) {
                    bestProbabilities[neighbor] = newProb;
                    maxHeap.enqueue([neighbor, newProb]);
                }
            }
        }
    }

    // If the end node is not reachable, return 0
    return 0;
};
