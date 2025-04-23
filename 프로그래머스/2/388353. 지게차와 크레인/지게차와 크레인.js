function solution(storage, requests) {
    let answer = 0;
    const n = storage.length;
    const m = storage[0].length;
    const visited = Array(n).fill().map((_) => Array(m).fill(1));
    
    const d = [[-1,0], [1, 0], [0, -1], [0, 1]]; // 상하좌우
    const isCorner = (col, row) => {
        const queue = [[col, row]];
        const seen = Array.from({ length: n }, () => Array(m).fill(false));
        seen[col][row] = true;
        let front = 0;

        while (front < queue.length) {
            const [x, y] = queue[front++];

            for (let i = 0; i < 4; i++) {
                const nx = x + d[i][0];
                const ny = y + d[i][1];

                if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                    return true; // 외부에 닿으면 출고 가능
                } else if (!seen[nx][ny] && visited[nx][ny] === 0) {
                    seen[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }

        return false;
    };
    
    requests.forEach((req) => {
        if (req.length === 1) {
            // 지게차를 이용한 출고 요청
            const result = [];
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (visited[i][j] === 1 && storage[i][j] === req[0]) {
                        if (isCorner(i, j)) {
                            result.push([i, j]);
                        }
                    }
                }
            }
            result.forEach(([x, y]) => visited[x][y] = 0)
            
        } else {
            // 크레인을 이용한 출고 요청
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (visited[i][j] === 1 && storage[i][j] === req[0]) {
                        visited[i][j] = 0;
                    }
                }
            }
        }
    })
    
    visited.forEach((row) => {
        answer += row.reduce((sum, num) => sum + num, 0)
    })
    
    return answer;
}