/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const convertString = (str) => {
        const hashmap = new Map();
        let counter = 0;
        let string = "";

        for(const char of str) {
            if(hashmap.has(char)) string += hashmap.get(char);
            
            hashmap.set(char, counter);
            counter++;

            string += hashmap.get(char);
        }

        return string;
    }

    // Convert the characters to numbers by mapping them by incrementing order
    let sStr = convertString(s);

    // Convert the characters to numbers by mapping them by incrementing order
    let tStr = convertString(t);

    // Return true if the two numbered strings match or not
    return sStr === tStr;
};