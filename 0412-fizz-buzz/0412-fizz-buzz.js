/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const ans = [];
    
    for(let i = 1; i < n + 1; i++) {
        const byFifteen = i % 15 == 0;
        const byThree = i % 3 == 0;
        const byFive = i % 5 == 0;
        
        console.log(i, byFifteen, byThree, byFive);
        
        if(byFifteen) ans.push('FizzBuzz');
        else if (byThree) ans.push('Fizz');
        else if (byFive) ans.push('Buzz');
        else ans.push(`${i}`);
    }
    
    return ans;
};