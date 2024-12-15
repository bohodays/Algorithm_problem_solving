function solution(elements) {
    let answer = 0;
    const sumSet = new Set();
    const n = elements.length
    
    for (let i = 0; i < n; i++) {
        let sumValue = 0;
        for (let j = i; j < n + i; j++) {
            sumValue += elements[j % n];
            sumSet.add(sumValue);
        }
    }
    
    return sumSet.size;
}