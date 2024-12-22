/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    if(!bank.length) return -1;
    
    const set = new Set(bank);
    set.add(startGene);
    
    const mutation = (gene) => {
        let mutations = [];
        const chars = ['A', 'C', 'G', 'T'];
        
        for(let i = 0; i < gene.length; i++) {
            for(const char of chars.filter(char => char !== gene[i])) {
                const newMutation = gene.slice(0, i) + char + gene.slice(i + 1);
                if(set.has(newMutation)) mutations.push(newMutation);
            }
        }
        
        return mutations;
    }
    
    let queue = [startGene];
    let steps = 0;
    let seen = new Set();
    while(queue.length) {
        const nextQueue = [];
        
        for(const gene of queue) {
            if(seen.has(gene)) continue;
            seen.add(gene);
            
            if(gene === endGene) return steps;
            
            nextQueue.push(...mutation(gene));
        }
        
        queue = nextQueue;
        steps++;
    }
    
    return -1;
};