/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
//     Define variables
    const set = new Set(bank), seen = new Set();
    let queue = [], nextQueue = [];
    let steps = 0;
    
//     Mutations (gene) => [genes]
    const mutations = (gene) => {
        const muts = [];
        const chars = ['A', 'C', 'G', 'T'];
        
        for(let i = 0; i < gene.length; i++) {
            for(const char of chars.filter(char => char !== gene[i])) {
                const mutated = gene.slice(0, i) + char + gene.slice(i + 1, 9);
                if(set.has(mutated)) muts.push(mutated);
            }
        }
        
        return muts;
    }
    
//     BFS
    queue.push(startGene);
    while(queue.length) {
        for(const item of queue) {
            if(seen.has(item)) continue;
            if(item === endGene) return steps;
            
            seen.add(item);
            nextQueue.push(...mutations(item));
        }
        
        queue = nextQueue;
        nextQueue = [];
        steps++;
    }
    return -1;
};