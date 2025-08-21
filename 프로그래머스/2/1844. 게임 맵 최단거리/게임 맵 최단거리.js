function solution(maps) {
    let answer = 0;
    const n = maps.length;
    const m = maps[0].length;
    
    const visited = Array(n).fill().map((_) => Array(m).fill(0));
    
    const bfs = (n, m, visited) => {
        
        // 상하좌우
        const d = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        
        // 시작지점 추가
        visited[0][0] = 1;
        const queue = [[0, 0]];
        
        // 탐색
        while (queue.length) {
            const [x, y] = queue.shift();
            
            // 4방향 확인
            for (const [dx, dy] of d) {
                const nx = x + dx;
                const ny = y + dy;
                // 범위 확인
                if (0 <= nx && nx < n && 0 <= ny && ny < m) {
                    // 방문 여부 + 벽이 없는지 확인
                    if (maps[nx][ny] && !visited[nx][ny]) {
                        visited[nx][ny] = visited[x][y] + 1;
                        queue.push([nx, ny])
                    }
                }
            }
        }
        
        return visited; 
    };
    
    const result = bfs(n, m, visited)
    
    return result[n - 1][m - 1] || -1;
}