
var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)) this.map.set(key, []);
    this.map.get(key).push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map.has(key)) return ""

    const values = this.map.get(key);
    let left = 0, right = values.length - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const [value, time] = values[mid];

        if(time === timestamp) return value;

        if(time > timestamp) right = mid - 1;
        else left = mid + 1;
    }
    
    return right < 0 ? "" : values[right][0];
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */