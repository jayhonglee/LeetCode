/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const prereq = new Map();
    const indegrees = new Array(numCourses).fill(0);
    
    for(const [x,y] of prerequisites) {
        if(!prereq.has(y)) prereq.set(y, []);
        
        prereq.get(y).push(x);
        indegrees[x]++;
    }    
    
    let queue = [];
    
    for(let i = 0; i < indegrees.length; i++) {
        if(indegrees[i] === 0) queue.push(i);
    }
    
    let numberOfNodesVisited = 0;

    while(queue.length) {
        const nextQueue = [];

        for(const course of queue) {
            numberOfNodesVisited++;
            const leadsTo = prereq.get(course) || [];
            
            for(const neighbor of leadsTo) {
                indegrees[neighbor]--;
                if(indegrees[neighbor] === 0) nextQueue.push(neighbor);
            }
        }

        queue = nextQueue;
    }
    
    return numberOfNodesVisited >= numCourses;
};