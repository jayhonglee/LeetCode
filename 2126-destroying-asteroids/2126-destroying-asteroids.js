/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
//     sort the asteroids
    asteroids.sort((a, b) => a - b);
    
//     loop over the asteroids 
//     if asteroid weighs more than the mass return false
//     else add the weight and continue
    for(const asteroid of asteroids) {
        if(asteroid > mass) return false;
        
        mass += asteroid;
    }
    
//     return true
    return true;
};