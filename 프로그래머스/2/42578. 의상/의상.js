function solution(clothes) {
    
    const ref = new Map();
    clothes.forEach(([name, type]) => {
        ref.set(type, ref.has(type) ? ref.get(type) + 1 : 1);
    })
    
    const answer = [...ref.values()].reduce((sum, num) => sum * (num + 1), 1) - 1;
    
    return answer;
}