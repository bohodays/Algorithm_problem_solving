function solution(rows, columns, queries) {
    const answer = [];
    
    const table = Array(rows).fill().map((_, i) => Array(columns).fill().map((_, j) => (j + 1) + (i * columns)))
    
    queries.forEach((item) => {
        const [x1, y1, x2, y2] = item;
        let curr = table[x1 - 1][y1 - 1];
        let next = table[x1][y1 - 1]
        let tmp = curr;
        
        // 상단
        for (let i = y1 - 1; i <= y2 - 1; i++) {
            curr = table[x1 - 1][i];
            table[x1 - 1][i] = next;
            next = curr;
            tmp = Math.min(tmp, curr);
        }
        
        // 우측
        for (let i = x1; i <= x2 - 1; i++) {
            curr = table[i][y2 - 1];
            table[i][y2 - 1] = next;
            next = curr;
            tmp = Math.min(tmp, curr);
        }
        
        // 하단
        for (let i = y2 - 2; i >= y1 - 1; i--) {
            curr = table[x2 - 1][i]
            table[x2 - 1][i] = next;
            next = curr;
            tmp = Math.min(tmp, curr);
        }
        
        // 좌측
        for (let i = x2 - 2; i > x1 - 1; i--) {
            curr = table[i][y1 - 1]
            table[i][y1 - 1] = next;
            next = curr;
            tmp = Math.min(tmp, curr);
        }
        
        
        answer.push(tmp)
    })
    
    
    return answer;
}