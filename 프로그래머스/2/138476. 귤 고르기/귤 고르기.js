function solution(k, tangerine) {
    let answer = 0;
    
    const tangerineMap = new Map();
    tangerine.forEach((item) => {
        tangerineMap.set(item, tangerineMap.has(item) ? tangerineMap.get(item) + 1 : 1);
    })
    
    const sortedValues = [...tangerineMap.values()].sort((a, b) => a - b);
    
    while (k > 0) {
        answer++;
        k -= sortedValues.pop();
    }
    
    return answer;
}