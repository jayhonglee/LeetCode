/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
//  Declare variables
    let stack = [], split, ans;
    
//  Split path by /
    split = path.split("/");
    
//  Loop over the split and if its not . or .. put it in stack
    for(const x of split) {
        if(x === "..") {
            stack.pop();
        } else {
            if(x !== "." && x) {
                stack.push(x);
            }
        }   
    }

    
//  start with / and no / at the end
    ans = stack.join("/");
    return "/" + ans;
};