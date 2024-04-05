/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
//  Declare variables
    let stack = [];
    
//  Split path by / (done in the for loop condition)
//  Loop over the split and if its not . or .. put it in stack
    for(const x of path.split("/")) {
        if(x === "..") {
            stack.pop();
        } else {
            if(x !== "." && x) {
                stack.push(x);
            }
        }   
    }

    
//  start with / and no / at the end
    return "/" + stack.join("/");
};