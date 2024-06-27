
var StockSpanner = function() {
    this.stack = [];
    this.hashmap = new Map();
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let value = 1;
    
//     check if the previous element is smaller
//     if smaller, add current value + the hashmapped value of that and pop that element, and repeat
    while(this.stack[this.stack.length - 1] <= price) {
        value += this.hashmap.get(this.stack[this.stack.length - 1])
        this.stack.pop();
    }
    
    this.hashmap.set(price, value);
    this.stack.push(price);

    return value;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */