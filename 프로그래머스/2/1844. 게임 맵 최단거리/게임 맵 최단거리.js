function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const table = Array(n).fill().map((_) => Array(m).fill(0));
    
    // 방향 (상 하 좌 우)
    const d = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    // 시작지점 설정
    table[0][0] = 1;
    const queue = [[0, 0]];
    
    while (queue.length) {
        const [x, y] = queue.shift();
        
        // 4방향 탐색
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + d[i][0], y + d[i][1]];
            // 범위 확인
            if (0 <= nx && nx < n && 0 <= ny && ny < m) {
                // 방문여부 & 벽 확인
                if (!table[nx][ny] && maps[nx][ny] === 1) {
                    table[nx][ny] = table[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    
    return table[n - 1][m - 1] || -1;
}