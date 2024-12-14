/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return node;
    
    const nodesMap = new Map();
    
    let queue = [];
    const rootClone = new _Node(node.val);
    queue.push([node, rootClone]);
    nodesMap.set(node, rootClone);
    
    let seen = new Set();
    while(queue.length) {
        const nextQueue = [];
        
        for(const [node, clone] of queue) {
            if(seen.has(node)) continue;
            seen.add(node);
            const neighbors = node.neighbors;
            
            for(const neighbor of neighbors) {
                if(nodesMap.has(neighbor)) {
                    clone.neighbors.push(nodesMap.get(neighbor));
                    nextQueue.push([neighbor, nodesMap.get(neighbor)]);
                } else {
                    const newClone = new _Node(neighbor.val);
                    nodesMap.set(neighbor, newClone);
                    clone.neighbors.push(newClone);
                    nextQueue.push([neighbor, newClone]);
                }
            }
        }
        
        queue = nextQueue;
    }
    
    return rootClone;
};