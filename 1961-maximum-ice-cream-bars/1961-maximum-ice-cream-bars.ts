function maxIceCream(costs: number[], coins: number): number {
    costs.sort((a,b) => a - b);

    let ans = 0;
    let spent = 0;
    for(const cost of costs) {
        if(spent + cost <= coins) {
            ans++;
            spent += cost;
        } else {
            break;
        }
    }

    return ans;
};