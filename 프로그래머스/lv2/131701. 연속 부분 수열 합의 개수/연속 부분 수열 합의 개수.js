function solution(elements) {    
    const numSet = new Set();
    const n = elements.length;
    
    for (let i = 0; i < n; i++) {
        let result = 0;
        for (let j = i; j < i + n; j++) {
            result += elements[j % n];
            numSet.add(result)
        }
    }
    

    return numSet.size;
}