function solution(elements) {
    const n = elements.length;
    elements = elements.concat(elements);
    const result = new Set();
    
    for (let i = 0; i < n; i++) {
        const temp = [];
        for (let j = 0; j < n; j++) {
            temp.push(elements[i + j]);
            result.add(temp.reduce((sum, num) => sum + num), 0);
        }
    }
    
    return result.size;
}

