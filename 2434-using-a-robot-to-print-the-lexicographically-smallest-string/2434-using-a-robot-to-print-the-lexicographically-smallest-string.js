/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    let t = [], p = [], sArray = [...s], sMinimum = [], sPointer = 0;
    
    // Precompute the minimum characters from each position to the end of the string
    sMinimum[sArray.length - 1] = sArray[sArray.length - 1];
    
    for (let i = sArray.length - 2; i >= 0; i--) {
        if(sMinimum[i+1] >= sArray[i]) {
            sMinimum[i] = sArray[i];
        } else {
            sMinimum[i] = sMinimum[i+1];
        }
    }
    
    // Move the first char of s to t
    const firstCharStoT = () => { 
        const firstChar = sArray[sPointer];
        t.push(firstChar);
        sPointer++;
    };    
    
    // Move the last char of t to paper
    const lastCharTtoP = () => p.push(t.pop());
    
    // Array to string
    const arrayToString = (arr) => arr.join("");
    
    // Main loop
    while (sPointer <= sArray.length || t.length) {
        const lastCharT = t[t.length - 1];
        const sMinimumValue = sMinimum[sPointer];
        const isSHasSmaller = s.length > 0 && sMinimumValue < lastCharT;
        
        if(!t.length || isSHasSmaller) {
            firstCharStoT();
        } else {
            lastCharTtoP();
        }
    }
    
    return arrayToString(p);
};