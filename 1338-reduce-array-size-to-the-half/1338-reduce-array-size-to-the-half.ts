function minSetSize(arr: number[]): number {
    const map = new Map();
    const total = arr.length;
    let curr = total;
    let ans = 0;
    
    for(const number of arr) {
        if(!map.has(number)) map.set(number, 0);
        
        map.set(number, map.get(number) + 1);
    }
    
    const sorted = [...map].sort((a,b) => b[1] - a[1]);
    while (total / 2 < curr) {
        curr -= sorted.shift()[1];
        ans++;
    }
    
    return ans;
};