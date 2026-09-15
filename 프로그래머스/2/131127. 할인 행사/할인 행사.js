function solution(want, number, discount) {
    var answer = 0;
    const ref = new Map();
    want.forEach((item, i) => ref.set(item, number[i]));
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const arr = discount.slice(i, i + 10);
        
        let flag = true;
        for (const key of ref.keys()) {
            if (ref.get(key) !== arr.filter((item) => item === key).length) {
                flag = false;
                break;
            }
        }
        
        if (flag) answer++
    }
    
    return answer;
}