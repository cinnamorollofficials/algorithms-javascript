function knapsack01(values, weigths, W){
    const n = values.length;
    const dp = Array(W+1).fill(0)

    for(let i = 0; i < n;i++){
        for(let w=W;w >= weigths[i];w--){
            const newValue = dp[w-weigths[i]] + values[i];
            if(newValue > dp[w]){
                dp[w] = newValue;
            }
        }
    }
    return dp[W];
}

console.log(knapsack01([60, 100, 120], [10, 20, 30], 50)) // 220