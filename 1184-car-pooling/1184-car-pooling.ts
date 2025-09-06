function carPooling(trips: number[][], capacity: number): boolean {
    // Find the farthest point
    let farthest = 0;
    for(const [numPassengers, from, to] of trips) {
        farthest = Math.max(farthest, to);
    }

    // Create an array using the farthest point
    const tripsArr = new Array(farthest + 1).fill(0);

    // Loop over each trips and add and delete passengers counter respectively
    for(const [numPassengers, from, to] of trips) {
        tripsArr[from] += numPassengers;
        tripsArr[to] -= numPassengers;
    }

    // Check if there is a point that passengers go over the capacity
    let passengers = 0;
    for(const passenger of tripsArr) {
        passengers += passenger;
        if(passengers > capacity) return false;
    }

    return true;
};