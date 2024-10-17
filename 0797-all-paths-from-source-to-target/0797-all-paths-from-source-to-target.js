/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const target = graph.length - 1;
    let ans = [];
    
    const backtrack = (current, arr) => {
        arr.push(current);
        if(arr[arr.length - 1] === target) ans.push([...arr]);
            
        for(const node of graph[current]) {
            backtrack(node, arr);
            arr.pop();
        }
    }
    
    backtrack(0, []);
    
    return ans;
};