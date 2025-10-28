/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // Not Optimal By a Constant Factor
    // const convertString = (str) => {
    //     const hashmap = new Map();
    //     let counter = 0;
    //     let string = "";

    //     for(const char of str) {
    //         if(hashmap.has(char)) string += hashmap.get(char);
            
    //         hashmap.set(char, counter);
    //         counter++;

    //         string += hashmap.get(char);
    //     }

    //     return string;
    // }

    // // Convert the characters to numbers by mapping them by incrementing order
    // let sStr = convertString(s);

    // // Convert the characters to numbers by mapping them by incrementing order
    // let tStr = convertString(t);

    // // Return true if the two numbered strings match or not
    // return sStr === tStr;

    // Optimal Solution
    const sCode = new Array(256);
    const tCode = new Array(256);
    let sCounter = 0;
    let tCounter = 0;

    for(let i = 0; i < s.length; i++) {
        const sCharCode = s.charAt(i);
        const tCharCode = t.charAt(i);

        if(!sCode[sCharCode]) sCode[sCharCode] = ++sCounter;
        if(!tCode[tCharCode]) tCode[tCharCode] = ++tCounter;

        if (sCode[sCharCode] !== tCode[tCharCode]) return false;
    }

    return true;
};