function solution(maps) {
    let answer = 0;
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array(n).fill().map((_) => Array(m).fill(0));
    const d = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우
    
    // 시작지점 표시
    const queue = [[0, 0]];
    visited[0][0] = 1;
    
    while (queue.length) {
        const [x, y] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const nx = x + d[i][0];
            const ny = y + d[i][1];
            // 유효 범위 확인
            if (0 <= nx && nx < n && 0 <= ny && ny < m) {
                // 방문 및 벽 여부 확인
                if (!visited[nx][ny] && maps[nx][ny] === 1) {
                    visited[nx][ny] = visited[x][y] + 1;
                    queue.push([nx, ny])
                }
            }            
        }
    }
    
    return visited[n - 1][m - 1] || -1;
}