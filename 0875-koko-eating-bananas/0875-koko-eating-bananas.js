/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
//     create check funciton
    const check = (k) => {
        let hours = 0;
        
        for(const pile of piles) {
            hours += Math.ceil(pile / k);
        }
        
        return hours <= h;
    }
    
//     do binary search on piles
    let left = 1;
    let right = Math.max(...piles);
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if(check(mid)) right = mid - 1;
        else left = mid + 1;
    }
    
//     return ans
    return left;
};