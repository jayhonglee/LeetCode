/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.queue = [];
    this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    let queue = this.queue;
    let size = this.size;
    let sum = 0;
    
    queue.push(val);
    
    while(queue.length > size) {
        queue.shift();
    }
    
    for(const number of queue) {
        sum += number;
    }
    
    return sum / queue.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */