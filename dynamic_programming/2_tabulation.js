function fibBU(n){
    if(n<=1) return n;
    let prev2 = 0, prev1 = 1;

    for(let i=2;i<=n;i++){
        const cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
}

console.log(fibBU(6)) // 8