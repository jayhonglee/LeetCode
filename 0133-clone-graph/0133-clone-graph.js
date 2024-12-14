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
    const rootClone = new _Node(node.val);
    nodesMap.set(node, rootClone);
    
    let queue = [node];
    
    while(queue.length) {
        const nextQueue = [];
        
        for(const node of queue) {
            const neighbors = node.neighbors;
            const clone = nodesMap.get(node);
            
            for(const neighbor of neighbors) {
                if(nodesMap.has(neighbor)) clone.neighbors.push(nodesMap.get(neighbor));
                else {
                    const newClone = new _Node(neighbor.val);
                    nodesMap.set(neighbor, newClone);
                    
                    clone.neighbors.push(newClone);
                    nextQueue.push(neighbor);
                }
            }
        }
        
        queue = nextQueue;
    }
    
    return rootClone;
};

