function solution(n) {
    if (n === 1) return [1];
    if (n === 2) return [1, 2, 3];
    
    const answer = [];
    const table = Array(n).fill().map((_) => Array(n).fill(0));
    
    let limit = 0;
    for (let i = 0; i <= n; i++) {
        limit += i;
    }
    
    // 방향 설정
    const d =  [[1, -1], [0, 1], [-1, 0]];
    let direction = 0;
    let count = 1;
    let [x, y] = [0, n - 1]
    
    // 시작지점 설정
    table[0][n - 1] = 1;
    
    while (true) {
        const [nx, ny] = [x + d[direction][0], y + d[direction][1]];
        
        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
            if (table[nx][ny] === 0) {
                table[nx][ny] = table[x][y] + 1;
                
                if (table[nx][ny] === limit) break;
                
                x = nx;
                y = ny;
            } else {
                direction = (direction + 1) % 3;
            }
        } else {
            direction = (direction + 1) % 3;
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (table[i][j] !== 0) {
                answer.push(table[i][j])
            }            
        }
    }
    
    return answer;
}