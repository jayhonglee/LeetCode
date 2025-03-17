/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    // Prim's algo
    // 0. start at a node (any)
    // 1. pop the smallest node if unvisited from heap (then mark it as visited)
    // 2. add the node's weighted neighbor nodes (min heap)
    // 3. repeat until the visited set is of length of points

    // heap implementation
    const MinHeap = function() {
        this.heap = [];
    }

    MinHeap.prototype.push = function(val) {
        this.heap.push(val);
        this._heapifyUp();
    };

    MinHeap.prototype.removeMin = function() {
        if (this.heap.length === 0) {
            throw new Error("Heap is empty");
        }
        if (this.heap.length === 1) return this.heap.pop();

        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return minValue;
    };

    MinHeap.prototype.size = function() {
        return this.heap.length;
    };

    MinHeap.prototype._heapifyUp = function() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx][0] <= this.heap[idx][0]) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    };

    MinHeap.prototype._heapifyDown = function() {
        let idx = 0;
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let smallest = idx;

            if (leftIdx < this.heap.length && this.heap[leftIdx][0] < this.heap[smallest][0]) {
                smallest = leftIdx;
            }
            if (rightIdx < this.heap.length && this.heap[rightIdx][0] < this.heap[smallest][0]) {
                smallest = rightIdx;
            }
            if (smallest === idx) break;

            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    };

    // edge case
    if(points.length === 1) return 0;

    // define visited and adjacent list
    const visited = new Set();
    const adjList = new Map();
    for(let i = 0; i < points.length; i++) {
        const [currX, currY] = points[i];

        for(let j = i + 1; j < points.length; j++) {
            const [neighborX, neighborY] = points[j];
            const distance = Math.abs(currX - neighborX) + Math.abs(currY - neighborY);

            if(!adjList.has(i)) adjList.set(i, []);
            if(!adjList.has(j)) adjList.set(j, []);

            adjList.get(i).push([distance, j]);
            adjList.get(j).push([distance, i]);
        }
    }

    const minHeap = new MinHeap();
    minHeap.push([0,0]);

    let ans = 0;

    while(visited.size !== points.length) {
        const [popDistance, popIdx] = minHeap.removeMin();

        if(visited.has(popIdx)) continue;

        ans += popDistance;
        visited.add(popIdx);

        for(const [neighborDistance, neighborIdx] of adjList.get(popIdx)) {
            minHeap.push([neighborDistance, neighborIdx]);
        }
    }

    return ans;
};