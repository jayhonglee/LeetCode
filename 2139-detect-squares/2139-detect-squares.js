
var DetectSquares = function() {
    this.mapWithKeyY = new Map();
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    const [x, y] = point;

    if(!this.mapWithKeyY.has(y)) this.mapWithKeyY.set(y, new Map());

    const xMap = this.mapWithKeyY.get(y);
    xMap.set(x, (xMap.get(x) || 0) + 1);
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    const [xOriginal, yOriginal] = point;
    if (!this.mapWithKeyY.has(yOriginal)) return 0;

    const xList = this.mapWithKeyY.get(yOriginal);
    let ans = 0;

    // iterate over each point that's in the same y and get distance (from original to this new point)
    for(const [x, count] of xList) {
        if (x === xOriginal) continue;

        const distance = Math.abs(xOriginal - x);

        // Check for valid squares at yOriginal + distance and yOriginal - distance
        for (const yNew of [yOriginal + distance, yOriginal - distance]) {
            if (!this.mapWithKeyY.has(yNew)) continue;

            const xMapNewY = this.mapWithKeyY.get(yNew);
            if (xMapNewY.has(xOriginal) && xMapNewY.has(x)) {
                ans += count * xMapNewY.get(xOriginal) * xMapNewY.get(x);
            }
        }
    }

    return ans;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */