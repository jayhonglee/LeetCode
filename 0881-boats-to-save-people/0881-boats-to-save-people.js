/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let ans = 0, i = 0, j = people.length - 1;
    people.sort((a,b) => a - b);
    
    while(i <= j) {
        if(people[i] + people[j] <= limit) {
            i++;
        }
        
        j--;
        ans++;
    }
    
//     return ans
    return ans;
};
