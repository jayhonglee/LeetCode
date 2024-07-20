/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
//     Decalre two arrays where each represents a party
    let rad = [], dir = [], n = 0;
    
//     Store the senates to corresponding party array
    for(const person of senate) {
        if(person === "R") rad.push(n++);
        else dir.push(n++)
    }
    
//     While both arrays have at least a person the first element from each array faces off with the value of the person is index at lower index wins and gets a new index while the losing person gets eliminated
    while(rad.length && dir.length) {
        let radSenate = rad[0], dirSenate = dir[0];
        
        if(radSenate < dirSenate) {
            dir.shift();
            rad.shift();
            rad.push(n++);
        } else {
            rad.shift();
            dir.shift();
            dir.push(n++);
        }
    }
    
// Whoever has empty number of elements in the party loses
    return !rad.length ? "Dire" : "Radiant";
};