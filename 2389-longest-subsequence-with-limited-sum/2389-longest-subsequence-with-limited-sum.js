/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
//     sort nums
    nums.sort((a,b) => a - b);
    
//     build prefix
    let prefix = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i-1] + nums[i];
    }
    
//     bs
    let bs = (arr, tar) => {
        let left = 0, right = arr.length - 1;
        
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            let value = arr[mid];
            
            if(value === tar) return mid + 1;
            
            if(value < tar) left = mid + 1;
            else right = mid - 1;
        }
        
        return left;
    }
    
//     loop over queries and for each element find the index of prefix that equals to current query element or find the insertion point - 1
    let ans = [];
    for(const query of queries) {
        const index = bs(prefix, query);
        ans.push(index);
    }
    
    return ans;
};