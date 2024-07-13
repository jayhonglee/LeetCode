/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    
    for (let rock of asteroids) {
        if (rock > 0) {
            stack.push(rock);
        } else {
            while (stack.length && stack[stack.length - 1] > 0) {
                const top = stack[stack.length - 1];
                if (top + rock === 0) {
                    stack.pop();
                    rock = 0;
                    break;
                } else if (top + rock < 0) {
                    stack.pop();
                } else {
                    rock = 0;
                    break;
                }
            }
            if (rock !== 0) {
                stack.push(rock);
            }
        }
    }
    
    return stack;
};
