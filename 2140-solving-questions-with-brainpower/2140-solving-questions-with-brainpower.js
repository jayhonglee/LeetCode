/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
//     create a dp function
//     input current index
//     output maximum points you can get by choosing this index
    const dp = function(index) {
        if(index >= questions.length) return 0;
        
        if(memo[index] !== -1) return memo[index];
        
//         we can skip and consider next || solve and skip some questions
        const [points, skip] = questions[index];
                
        memo[index] = Math.max(dp(index + 1), points + dp(index + skip + 1))
        return memo[index];
    }
    
//     call dp 
    const memo = new Array(questions.length).fill(-1);
    return dp(0);
};