/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
//     declare variables
    let array = [];
    
//     loop over the prices array and store for each element the closest price value that is equal or smaller
    for(let i = 0; i < prices.length; i++) {
        let discount = 0, m = i + 1;
        
        while (m < prices.length) {
            if(prices[m] && prices[m] <= prices[i]) {
                discount = prices[m];
                break;
            } else {
                m++;
            }
        }
        array[i] = discount;
    }
    
//     loop over the prices array and using the stored array from the above step, subtract current and element from the array (mappig)
    for(let i = 0; i < prices.length; i++) {
        prices[i] -= array[i];
    }
    
//     return the mapped array
    return prices;
};