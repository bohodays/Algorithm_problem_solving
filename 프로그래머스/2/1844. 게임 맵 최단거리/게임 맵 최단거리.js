function solution(maps) {
    let answer = 0;
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array(n).fill().map((_) => Array(m).fill(0));
    const d = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우
    
    // 시작지점 세팅
    visited[0][0] = 1;
    const queue = [[0, 0]];
    
    while (queue.length) {
        const [x, y] = queue.shift();
        
        // 4방향 탐색
        for (const [dx, dy] of d) {
            const nx = x + dx;
            const ny = y + dy;
            // 범위 유효성 체크
            if (0 <= nx && nx < n && 0 <= ny && ny < m) {
                // 방문 및 벽 여부 유효성 체크
                if (maps[nx][ny] && !visited[nx][ny]) {
                    visited[nx][ny] = visited[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    
    return visited[n - 1][m - 1] || -1;
}