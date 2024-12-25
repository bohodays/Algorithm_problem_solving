function solution(topping) {
    let answer = 0;
    
    const target1 = new Set();
    let target2 = new Set(topping);
    const refTopping = {};
    topping.forEach((item) => {
        refTopping[item] = refTopping[item] ? refTopping[item] + 1 : 1;
    })
    
    for (let i = 0; i < topping.length; i++) {
        const item = topping[i];
        target1.add(item);
        refTopping[item] -= 1;
        
        if (!refTopping[item]) {
            target2.delete(item)
        }
        
        if (target1.size === target2.size) {
            answer++;
        }
    }
    
    return answer;
}