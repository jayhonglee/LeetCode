/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const prereqOf = new Map();
    const indegree = new Array(numCourses).fill(0);
    
    for(const [x, y] of prerequisites) {
        if(!prereqOf.has(y)) prereqOf.set(y, []);
        prereqOf.get(y).push(x);
        
        indegree[x]++;
    }
    
    let queue = [];
    for(let i = 0; i < indegree.length; i++) {
        if(indegree[i] === 0) queue.push(i);
    }
    
    let visitied = new Set();
    while(queue.length) {
        const nextQueue = [];
        
        for(const course of queue) {
            visitied.add(course);
            const neighbors = prereqOf.get(course) || [];
            for(const neighbor of neighbors) {
                indegree[neighbor]--;
                
                if(indegree[neighbor] === 0) nextQueue.push(neighbor);
            }
        }
        
        queue = nextQueue;
    }
    
    return numCourses > visitied.size ? [] : [...visitied];
};