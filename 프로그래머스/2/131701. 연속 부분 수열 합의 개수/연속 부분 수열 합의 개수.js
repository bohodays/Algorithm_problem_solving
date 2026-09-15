function solution(elements) {
    const answer = new Set();
    const n = elements.length;
    
    for (let i = 0; i < n; i++) {
        let result = 0;
        for (let j = i; j < n + i; j++) {
            result += elements[j % n];
            answer.add(result);
        }
    }
    
    return answer.size;
}