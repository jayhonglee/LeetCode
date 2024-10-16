/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    const onTime = (speed) => {
        let hours = 0;
        
        for(const [i, x] of dist.entries()) {
            if(i !== dist.length - 1) hours += Math.ceil(x / speed);
            else hours += x / speed;
        }
        
        return hours <= hour;
    }
    
    let left = 1, right = 10 ** 7;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if(onTime(mid)) right = mid - 1;
        else left = mid + 1;
    }
    
    if(left === 10 ** 7 + 1) return -1;
    return left;
};