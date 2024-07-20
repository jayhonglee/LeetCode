
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const stack = this.stack;
    
    stack.push({
        val,
        min: stack.length === 0 ? val : Math.min(stack[stack.length - 1].min, val)
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const stack = this.stack;
    return stack[stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const stack = this.stack;
    return stack[stack.length - 1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */