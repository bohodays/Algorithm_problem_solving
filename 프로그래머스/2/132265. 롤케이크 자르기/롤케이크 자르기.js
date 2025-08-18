function solution(topping) {
    let answer = 0;
    
    const rightSet = new Set(topping);
    const toppingCountRef = {};
    topping.forEach((item) => {
        toppingCountRef[item] = toppingCountRef[item] ? toppingCountRef[item] + 1 : 1
    });
    
    const leftSet = new Set();
    topping.forEach((item) => {
        leftSet.add(item);
        
        if (toppingCountRef[item]) toppingCountRef[item] -= 1;
        
        if (!toppingCountRef[item]) rightSet.delete(item);
        
        if (leftSet.size === rightSet.size) answer++;
    })
    
    return answer;
}