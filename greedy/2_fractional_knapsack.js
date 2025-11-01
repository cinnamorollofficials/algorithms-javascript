function fractionalKnapsack(items, capacity){
    items.sort((a, b) => (b.value/b.weight)- (a.value/a.weight))

    let total = 0;
    for(const item of items){
        if(capacity <= 0) break;

        if(item.weight <= capacity){
            capacity -= item.weight;
            total += item.value;
        }else{
            const portion = capacity / item.weight;
            total += item.value * portion;
            break;
        }
    }
    return total;
}

console.log(fractionalKnapsack([{value:60, weight:10}, {value:100, weight:20}, {value:120, weight:30}],
  50)) // 240