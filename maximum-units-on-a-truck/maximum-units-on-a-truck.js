/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    const sorted = boxTypes.sort((a,b)=>b[1]-a[1]);
    let total = 0;
    
    while(truckSize > 0) {
        if(!sorted.length) break;
        const first = sorted[0];
        total += first[1];
        first[0] - 1 === 0 ? sorted.shift() : first[0]--;
        truckSize--;
    }
    
    return total;
};