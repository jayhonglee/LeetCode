/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
//     Edge case
    if(bombs.length === 0) return 0;
    
//     Create an adjacency list
    const stringify = ([x, y, z]) => `${x},${y},${z}`;
    
    
    const isWithinRange = ([x1, y1, r1] = origin, [x2, y2, r2] = neighbor) => {
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        
        return distance <= r1;
    }
    
    const list = new Map();
    for(const [i, bomb1] of bombs.entries()) {
        for(const [j, bomb2] of bombs.entries()) {
            if(bomb1 === bomb2 || !isWithinRange(bomb1, bomb2)) continue;
            
            if(!list.has(i)) list.set(i, []);
            list.get(i).push([stringify(bomb2),j]);
        }
    }
    
//     BFS with seen 
    const bfs = (bombStart,i) => {
        let queue = [];
        let seen = new Set();
        let detonated = 0;
        
        queue.push([stringify(bombStart),i]);
        
        while(queue.length > 0) {
            let nextQueue = [];
            
            for(const [bomb, index] of queue) {
                if(seen.has(index)) continue;
                seen.add(index);
                detonated++;
                
                const neighbors = list.get(index)
                if(!neighbors) continue;
                
                nextQueue.push(...neighbors);
            }
            
            queue = nextQueue;
        }
        
        return detonated;
    }

    
//     Loop over the bombs run bfs and keep track of maximum detonated.
    let ans = 1;
    
    for(const [i, bomb] of bombs.entries()) {
        ans = Math.max(bfs(bomb,i), ans);
    }
    
    return ans;
};