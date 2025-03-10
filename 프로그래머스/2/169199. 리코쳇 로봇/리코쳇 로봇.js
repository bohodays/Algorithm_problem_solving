function solution(board) {
    let answer = 0;
    const d = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우
    const n = board.length;
    const m = board[0].length;
    const visited = Array(n).fill().map((_) => Array(m).fill(false));
    
    // 시작위치, 목표지점 찾기
    let start, end; 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "R") start = [i, j];
            else if (board[i][j] === "G") end = [i, j];
        }
    }
    
    // 시작 위치 방문 처리
    visited[start[0]][start[1]] = true;
    
    // BFS 수행
    const queue = [[...start, 0]];
    
    while (queue.length) {
        const [x, y, curr] = queue.shift();
        
        if (board[x][y] === "G") return curr;
        
        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [x, y];
            const [dx, dy] = [d[i][0], d[i][1]]
            
            // 장애물 또는 경계를 만날 때까지 이동
            while (0 <= nx + dx && nx + dx < n && 0 <= ny + dy && ny + dy < m && board[nx + dx][ny + dy] !== "D") {
                nx += dx;
                ny += dy;
            }
            
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, curr + 1])
            }
            
        }
        
    }
    
    return -1;
}