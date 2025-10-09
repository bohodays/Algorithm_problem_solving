function solution(land) {
    let answer = 0;
    const n = land.length;
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 4; j++) {
            const beforeRow = [...land[i - 1].slice(0, j), ...land[i - 1].slice(j + 1, 4)]
            land[i][j] += Math.max(...beforeRow)
        }
    }
    
    return Math.max(...land[n - 1]);
}