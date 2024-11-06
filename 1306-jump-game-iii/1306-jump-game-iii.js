/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const adjacencyMap = new Map();
    
    const validate = (node, curr) => {
        return node >= 0 && node < arr.length && node !== curr;
    }
    
    for(const [index, node] of arr.entries()) {
        const left = index - node;
        const right = index + node;
        
        adjacencyMap.set(index, [])
        validate(left, index) && adjacencyMap.get(index).push(left);
        validate(right, index) && adjacencyMap.get(index).push(right);
    }
    
    const visited = new Array(arr.length);
    let queue = [];
    queue.push(start);
    
    while(queue.length) {
        const temp = [];
        
        for(const element of queue) {
            if(arr[element] === 0) return true;
            
            if(visited[element]) continue;
            visited[element] = true;
            
            const neighbors = adjacencyMap.get(element);
            for(const neighbor of neighbors) {
                temp.push(neighbor);
            }
        }
        
        queue = temp;
    }
    
    return false;
};