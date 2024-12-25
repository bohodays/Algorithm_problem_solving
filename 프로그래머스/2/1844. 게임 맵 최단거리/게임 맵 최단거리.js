function solution(maps) {
    let answer = 0;
    
    const n = maps.length;
    const m = maps[0].length;
    
    // 4방향 탐색
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    // 방문 여부를 확인하기 위한 배열
    const visited = Array(n).fill().map(() => Array(m).fill(0));
    
    const bfs = () => {
        // 큐 생성
        const queue = [];
        // 시작 위치 추가하기
        queue.push([0, 0]);
        visited[0][0] = 1;
        
        // 큐가 빌 때까지 반복
        while (queue.length) {
            // 선입선출
            const [x, y] = queue.shift();
            
            if (x === n - 1 && y === m - 1) {
                return true;
            }
            
            for (let i = 0; i <= 3; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                // 범위 안에 있는지 확인
                if (0 <= nx && nx < n && 0 <= ny && ny < m) {
                    // 방문 여부 확인
                    if (maps[nx][ny] === 1 && !visited[nx][ny]) {
                        visited[nx][ny] = visited[x][y] + 1;
                        queue.push([nx, ny]);
                    }
                }
            }
        }
        return false;
    }
    
    if (bfs()) return visited[n - 1][m - 1];
    else return -1

}