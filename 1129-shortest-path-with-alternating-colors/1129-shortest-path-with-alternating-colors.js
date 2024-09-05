/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
//     create a bfs function 
//     input: startNode startColor
//     function: store the shortest length for each node
//     output: void
    let ans = new Array(n).fill(Infinity), rEdges = new Map(), bEdges = new Map();
    
    for(const [x,y] of redEdges) {
        rEdges.get(x) ? rEdges.get(x).push([y,'red']) : rEdges.set(x, [[y,'red']]);
    }
    
    for(const [x,y] of blueEdges) {
        bEdges.get(x) ? bEdges.get(x).push([y,'blue']) : bEdges.set(x, [[y,'blue']]);
    }
    
    const bfs = (node, color) => {
        let queue = [[node, color]], nextQueue = [], seenR = new Set(), seenB = new Set(), level = 0;
        
        while(queue?.length > 0) {
            for(const [index, value] of queue.entries()) {
                const [node, clr] = value;
            
                if ((clr === 'red' && seenR.has(node)) || (clr === 'blue' && seenB.has(node))) continue;
                
                clr === 'red' ? seenR.add(node) : seenB.add(node);
                
                ans[node] = Math.min(ans[node], level);
                
                // Explore blue edges if coming from red
                if (clr === 'red' && bEdges.get(node)) {
                    for (const [nextNode] of bEdges.get(node)) {
                        if (!seenB.has(nextNode)) nextQueue.push([nextNode, 'blue']);
                    }
                }
                
                // Explore red edges if coming from blue
                if (clr === 'blue' && rEdges.get(node)) {
                    for (const [nextNode] of rEdges.get(node)) {
                        if (!seenR.has(nextNode)) nextQueue.push([nextNode, 'red']);
                    }
                }
            }
            
            queue = nextQueue;
            nextQueue = [];
        
            level++;
        }
    }
    bfs(0, 'red');
    bfs(0, 'blue');

    return ans.map((num)=> {
        if(num === Infinity) return -1;
        else return num;
    })
};