/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    for (let i = s.length - 1; i >= 0; i--) {
        const currChar = s[i];
        if (currChar === " ") continue; // Skip spaces
        else if (currChar === ")" || currChar === "+" || currChar === "-") {
            stack.push(currChar); // Push operators or closing parenthesis
        } else if (currChar === "(") {
            // Process the sub-expression inside parentheses
            let sum = 0;
            let operator = "+";
            while (stack.length && stack[stack.length - 1] !== ")") {
                const top = stack.pop();
                if (top === "+" || top === "-") {
                    operator = top; // Update operator
                } else {
                    // Apply operator and update the sum
                    const num = +top;
                    sum = operator === "+" ? sum + num : sum - num;
                }
            }
            stack.pop(); // Remove the closing parenthesis
            stack.push(sum); // Push the evaluated result back to the stack
        } else {
            // It's a digit. Read the full number (can be more than 1 digit)
            let num = "";
            while (i >= 0 && !isNaN(s[i]) && s[i] !== " ") {
                num = s[i] + num;
                i--;
            }
            i++; // Adjust index after the last digit
            stack.push(num); // Push the number to the stack
        }
    }

    // Final evaluation for remaining operators/numbers in the stack
    let sum = 0;
    let operator = "+";
    while (stack.length) {
        const top = stack.pop();
        if (top === "+" || top === "-") {
            operator = top;
        } else {
            const num = +top;
            sum = operator === "+" ? sum + num : sum - num;
        }
    }

    return sum;
};
