/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((boxA, boxB) => {
        return boxB[1] - boxA[1];
    })
    
    let i = 0, ans = 0;
    while(truckSize > 0 && i < boxTypes.length) {
        if(boxTypes[i][0] === 0) {
            i++;
            continue;
        }
        
        truckSize--;
        boxTypes[i][0]--;
        ans += boxTypes[i][1];
    }
    
    return ans;
};