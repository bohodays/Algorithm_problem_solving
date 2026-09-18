function solution(topping) {
    let answer = 0;
    const n = topping.length;
    
    const ref = new Map();
    topping.forEach((item) => {
        ref.set(item, ref.has(item) ? ref.get(item) + 1 : 1);
    });
    
    let totalCount = [...ref.keys()].length;
    const checkSet = new Set();
    topping.forEach((item) => {
        checkSet.add(item);
        if (ref.has(item) && ref.get(item) > 0) ref.set(item, ref.get(item) - 1);
        
        if (ref.get(item) === 0) {
            ref.delete(item);
            totalCount--;
        }
        
        if (checkSet.size === totalCount) answer++;
    })
    
    return answer;
}