var checkValidString = function(s) {
    let minOpen = 0;
    let maxOpen = 0;

    for(const char of s) {
        if(char === "(") {
            minOpen++;
            maxOpen++;
        } else if(char === ")") {
            minOpen--;
            maxOpen--;
        } else {
            minOpen--;
            maxOpen++;
        }

        if(maxOpen < 0) return false;
        if(minOpen < 0) minOpen = 0;
    }

    return minOpen === 0;
};