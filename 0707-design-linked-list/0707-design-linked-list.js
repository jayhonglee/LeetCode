
var MyLinkedList = function() {
    this.linkedList = [];
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    return this.linkedList[index] === undefined ? -1 : this.linkedList[index];
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.linkedList.unshift(val);
    console.log(this.linkedList);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.linkedList.push(val);
    console.log(this.linkedList);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index !==0 && this.linkedList[index - 1] === undefined) {
        console.log(`returning cuz list[${index} - 1] === ${this.linkedList[index - 1]}`);
        return;
    }
    this.linkedList.splice(index, 0, val);
    console.log(this.linkedList);
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    this.linkedList.splice(index, 1);
    console.log(this.linkedList);
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */