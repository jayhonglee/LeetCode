function divisibilityArray(word: string, m: number): number[] {
    // define variables cum and ans array
    let cum: number = 0, ans: number[] = [];

    // iterate over the word array
    for(const char of word) {
    //      for each character, set cum = cum * 10 + character % m
            cum = (cum * 10 + Number(char)) % m;
            
    //      then check if divisible or not and update the ans array
            if(cum % m === 0) ans.push(1);
            else ans.push(0);
    }

    return ans;
};